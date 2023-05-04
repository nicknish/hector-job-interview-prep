/**
 * In this exercise, we're going to add some more basic TypeScript features such
 * as more complex types and interfaces.
 *
 * Notice that TypeScript is smart enough to infer the type of the variable
 * based on the value we assign to it. We don't have to explicitly tell
 * TypeScript that the variable is a string.
 *
 * Instructions:
 * 1. If you're not already running `npm run dev`, run it.
 * 2. Check dist/index-3.js to see what the TypeScript compiler did to the code.
 */

// .............................................................. //
// Try removing the @ts-expect-error line, read the error, and fix it

const testStr = 'Hello World!'
const testStr2 = 'World Hello!'

// @ts-expect-error
console.log(testStr === testStr2)

// .............................................................. //
// Hover over user and user2 to see the inferred type, notice they are different

const user = {
  name: 'Hayes',
  id: 0,
}
const user2 = {
  name: 'Hayes',
  id: 0,
  username: 'hayes',
}

// .............................................................. //
// Try removing the @ts-expect-error line, read the error, and fix it

export interface User {
  name: string
  id: number
}

// @ts-expect-error
const user3: User = {
  name: 'Hayes',
}

// .............................................................. //
// Try removing the @ts-expect-error line, read the error, and fix it

const user4: User = {
  name: 'Hayes',
  id: 4,
  // @ts-expect-error
  username: 'hayes',
}
const user5: User = {
  name: 'William',
  id: 5,
}
