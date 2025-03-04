import type { IDecoded } from '@/interfaces'

export interface IBech32Handler {
  checkIfValid(possibleBech32: string, limit?: number): boolean

  checkIfValidAsync(possibleBech32: string, limit?: number): Promise<boolean>

  swapPrefix(prefix: string, existingBech32: string, limit?: number): string

  swapPrefixAsync(prefix: string, existingBech32: string, limit?: number): Promise<string>

  encode(prefix: string, words: ArrayLike<number>, limit?: number): string

  encodeAsync(prefix: string, words: ArrayLike<number>, limit?: number): Promise<string>

  decode(str: string, limit?: number): IDecoded

  decodeAsync(str: string, limit?: number): Promise<IDecoded>

  toWords(bytes: ArrayLike<number>): number[]

  toWordsAsync(bytes: ArrayLike<number>): Promise<number[]>

  fromWords(words: ArrayLike<number>): number[]

  fromWordsAsync(words: ArrayLike<number>): Promise<number[]>
}
