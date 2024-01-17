import { Bech32Handler } from '@/classes'
export * from '@/interfaces'

export const bech32 = new Bech32Handler('bech32')
export const bech32m = new Bech32Handler('bech32m')
