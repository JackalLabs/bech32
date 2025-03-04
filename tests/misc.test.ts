import { describe, expect, test } from 'vitest'
import { secondToMS, setDelay } from '@/utils/misc'

describe('Miscellaneous Functions', () => {
  test('setDelay should delay execution', { timeout: 12000 }, async () => {
    const start = Date.now()
    await setDelay(10) // 10 seconds
    const diff = Date.now() - start
    expect(diff).toBeGreaterThanOrEqual(10000)
  })

  test('secondToMS should return seconds converted to milliseconds', () => {
    expect(secondToMS(5)).toBe(5000)
  })
})
