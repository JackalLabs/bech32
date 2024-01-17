import type { IDecoded } from '@/interfaces'

export interface IBech32Handler {
  swapPrefix(prefix: string, existingBech32: string, LIMIT?: number): string
  encode(prefix: string, words: ArrayLike<number>, LIMIT?: number): string
  decode(str: string, LIMIT?: number): IDecoded

  toWords(bytes: ArrayLike<number>): number[]
  fromWords(words: ArrayLike<number>): number[]
}
