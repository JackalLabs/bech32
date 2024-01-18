import { Bech32Handler } from '@/classes'
import { IBech32Handler } from '@/interfaces'

export * from '@/interfaces'

export const bech32: IBech32Handler = new Bech32Handler('bech32')
export const bech32m: IBech32Handler = new Bech32Handler('bech32m')
