import type { IDecoded } from '@/interfaces'

export interface IBech32Handler {
  checkIfValid(possibleBech32: string): boolean
  checkIfValidAsync(possibleBech32: string): Promise<boolean>

  swapPrefix(prefix: string, existingBech32: string, LIMIT?: number): string
  swapPrefixAsync(prefix: string, existingBech32: string, LIMIT?: number): Promise<string>

  encode(prefix: string, words: ArrayLike<number>, LIMIT?: number): string
  encodeAsync(prefix: string, words: ArrayLike<number>, LIMIT?: number): Promise<string>

  decode(str: string, LIMIT?: number): IDecoded
  decodeAsync(str: string, LIMIT?: number): Promise<IDecoded>

  toWords(bytes: ArrayLike<number>): number[]
  toWordsAsync(bytes: ArrayLike<number>): Promise<number[]>

  fromWords(words: ArrayLike<number>): number[]
  fromWordsAsync(words: ArrayLike<number>): Promise<number[]>
}
