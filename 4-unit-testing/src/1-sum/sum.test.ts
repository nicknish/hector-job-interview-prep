import { sum } from './sum'

describe('sum', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(4)
  })

  // Notice TypeScript is now allowing compiling because we're passing in a
  // string instead of a number once we added types to the function. This is how
  // TypeScript can eliminate bugs before they happen, by preventing us from
  // passing the wrong data. Feel free to delete this.
  it('should not allow non-numbers', () => {
    expect(sum('1', '2')).toBe(3)
  })
})
