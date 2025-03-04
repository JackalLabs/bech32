import { describe, expect, test } from 'vitest'

import { bech32m } from '@/index'
import { fixtures } from './fixtures'

describe('bech32m', () => {
  test('fromWords() fails correctly', async () => {
    expect(() => bech32m.fromWords(fixtures.fromWords.invalid[0].words)).toThrowError('Excess padding')
    expect(() => bech32m.fromWords(fixtures.fromWords.invalid[1].words)).toThrowError('Non-zero padding')
  })
})
