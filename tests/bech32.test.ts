import { describe, expect, test } from 'vitest'

import { bech32 } from '@/index'
import { fixtures } from './fixtures'

describe('bech32', () => {
  test('fromWords() fails correctly', async () => {
    expect(() => bech32.fromWords(fixtures.fromWords.invalid[0].words)).toThrowError('Excess padding')
    expect(() => bech32.fromWords(fixtures.fromWords.invalid[1].words)).toThrowError('Non-zero padding')
  })
})
