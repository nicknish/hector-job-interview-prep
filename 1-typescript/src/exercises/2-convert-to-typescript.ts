// @ts-nocheck

/**
 * Exercise 2: Run `node dist/exercises/2-convert-to-typescript.js`. Notice that
 * there are no runtime errors. This demonstrates how JavaScript can technically
 * still run in a lot of scenarios, even when our code is run in ways we don't
 * expect.
 *
 * For this exercise, remove the @ts-nocheck flag and convert the following
 * functions to TypeScript. Also add explicit return types to the functions.
 */

function sum(a, b) {
  return a + b
}

function greet(name) {
  return `Hello ${name}`
}

console.log(sum(5, 2))
console.log(sum(5, '5'))
console.log(sum('a', 'b'))

console.log(greet('Hayes'))
console.log(greet(['Hayes']))
