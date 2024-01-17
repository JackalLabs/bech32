import { CharSet, CharSetMap } from '@/utils/globals'
import type { IDecoded, IBech32Handler } from '@/interfaces'

export class Bech32Handler implements IBech32Handler {
  protected readonly encodingConstant: number

  constructor(encoding: 'bech32' | 'bech32m') {
    if (encoding === 'bech32') {
      this.encodingConstant = 1;
    } else if (encoding === 'bech32m') {
      this.encodingConstant = 0x2bc830a3;
    } else {
      throw new Error('Invalid encoding provided')
    }
  }

  swapPrefix(prefix: string, existingBech32: string, LIMIT: number = 90): string {
    try {
      const decoded = this.decode(existingBech32, LIMIT)
      return this.encode(prefix, decoded.words, LIMIT)
    } catch (err) {
      throw err
    }
  }

  encode(prefix: string, words: ArrayLike<number>, LIMIT: number = 90): string {
    try {
      if (prefix.length + 7 + words.length > LIMIT) {
        throw new TypeError('Exceeds length limit')
      }
      prefix = prefix.toLowerCase();
      // determine chk mod
      let chk = this.prefixChk(prefix)
      let result = prefix + '1';
      for (let i = 0; i < words.length; ++i) {
        const x = words[i];
        if (x >> 5 !== 0) {
          throw new Error('Non 5-bit word')
        }
        chk = this.polymodStep(chk) ^ x;
        result += CharSet.charAt(x);
      }
      for (let i = 0; i < 6; ++i) {
        chk = this.polymodStep(chk);
      }
      chk ^= this.encodingConstant;
      for (let i = 0; i < 6; ++i) {
        const v = (chk >> ((5 - i) * 5)) & 0x1f;
        result += CharSet.charAt(v);
      }
      return result;
    } catch (err) {
      throw err
    }
  }

  decode(str: string, LIMIT: number = 90): IDecoded {
    try {
      if (str.length < 8) {
        throw new Error(str + ' too short')
      }
      if (str.length > LIMIT) {
        throw new Error('Exceeds length limit')
      }
      // don't allow mixed case
      const lowered = str.toLowerCase();
      const uppered = str.toUpperCase();
      if (str !== lowered && str !== uppered) {
        throw new Error('Mixed-case string ' + str)
      }
      str = lowered;
      const split = str.lastIndexOf('1');
      if (split === -1) {
        throw new Error('No separator character for ' + str)
      }
      if (split === 0) {
        throw new Error('Missing prefix for ' + str)
      }
      const prefix = str.slice(0, split);
      const wordChars = str.slice(split + 1);
      if (wordChars.length < 6) {
        throw new Error('Data too short')
      }
      let chk = this.prefixChk(prefix);
      const words: number[] = [];
      for (let i = 0; i < wordChars.length; ++i) {
        const c = wordChars.charAt(i);
        const v = CharSetMap[c];
        if (v === undefined) {
          throw new Error('Unknown character ' + c)
        }
        chk = this.polymodStep(chk) ^ v;
        if (i + 6 >= wordChars.length) {
          continue
        }
        words.push(v);
      }
      if (chk !== this.encodingConstant) {
        throw new Error('Invalid checksum for ' + str)
      }
      return { prefix, words };
    } catch (err) {
      throw err
    }
  }

  toWords(bytes: ArrayLike<number>): number[] {
    try {
      return this.convert(bytes, 8, 5, true);
    } catch (err) {
      throw err
    }
  }

  fromWords(words: ArrayLike<number>): number[] {
    try {
      return this.convert(words, 5, 8, false);
    } catch (err) {
      throw err
    }
  }

  protected polymodStep(pre: number): number {
    const b = pre >> 25;
    return (
      ((pre & 0x1ffffff) << 5) ^
      (-((b >> 0) & 1) & 0x3b6a57b2) ^
      (-((b >> 1) & 1) & 0x26508e6d) ^
      (-((b >> 2) & 1) & 0x1ea119fa) ^
      (-((b >> 3) & 1) & 0x3d4233dd) ^
      (-((b >> 4) & 1) & 0x2a1462b3)
    );
  }

  protected prefixChk(prefix: string): number {
    let chk = 1;
    for (let i = 0; i < prefix.length; ++i) {
      const c = prefix.charCodeAt(i);
      if (c < 33 || c > 126) {
        throw new Error(`Invalid prefix (${prefix})`)
      }
      chk = this.polymodStep(chk) ^ (c >> 5);
    }
    chk = this.polymodStep(chk);
    for (let i = 0; i < prefix.length; ++i) {
      const v = prefix.charCodeAt(i);
      chk = this.polymodStep(chk) ^ (v & 0x1f);
    }
    return chk;
  }

  protected convert(
    data: ArrayLike<number>,
    inBits: number,
    outBits: number,
    pad: boolean,
  ): number[] {
    let value = 0;
    let bits = 0;
    const maxV = (1 << outBits) - 1;
    const result: number[] = [];
    for (let i = 0; i < data.length; ++i) {
      value = (value << inBits) | data[i];
      bits += inBits;
      while (bits >= outBits) {
        bits -= outBits;
        result.push((value >> bits) & maxV);
      }
    }
    if (pad) {
      if (bits > 0) {
        result.push((value << (outBits - bits)) & maxV);
      }
    } else {
      if (bits >= inBits) {
        throw new Error('Excess padding')
      }
      if ((value << (outBits - bits)) & maxV) {
        throw new Error('Non-zero padding')
      }
    }
    return result;
  }
}