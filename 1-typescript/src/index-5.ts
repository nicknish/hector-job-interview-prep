import { UserAccount } from './index-4'

/**
 * In this exercise, we're going to use TypeScript features for functions. We're
 * also going to reuse the typed UserAccount class from index-4.ts. When you run
 * this file, you'll see output from index-4.ts which can be ignored.
 *
 * Instructions:
 * 1. If you're not already running `npm run dev`, run it.
 * 2. Run `node dist/index-5.js`.
 * 3. Check dist/index-5.js to see what the TypeScript compiler did to the code.
 */

function add(a: number, b: number) {
  return a + b
}

// .............................................................. //
// Try removing the @ts-expect-error line, read the error, and fix it

console.log(add(1, 2))
console.log(add(4, 5))

// @ts-expect-error
console.log(add(1, '2'))

// .............................................................. //
// Try removing the @ts-expect-error line, read the error, and fix it

function printName(user: UserAccount) {
  console.log(user.name)
  // @ts-expect-error
  console.log(user.profile_img)
}

const user7 = new UserAccount('Nick', 7)
console.log(printName(user7))

// .............................................................. //
// Notice that the return type is inferred

function getGreeting(user: UserAccount) {
  return `Hello ${user.name}!`
}

// .............................................................. //
// Notice that the return type is explicit

function getGreeting2(user: UserAccount): string {
  return `Hello ${user.name}!`
}
