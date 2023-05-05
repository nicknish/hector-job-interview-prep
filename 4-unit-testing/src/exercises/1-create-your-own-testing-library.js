/**
 * Create your own testing library. Please read EXERCISES.md for more details.
 */

// Do not change
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers')
  }
  return a + b
}
