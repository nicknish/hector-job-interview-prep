/**
 * In this exercise, we're going to use TypeScript features for JavaScript classes.
 *
 * Instructions:
 * 1. If you're not already running `npm run dev`, run it.
 * 2. Run `node dist/index-4.js`.
 * 3. Check dist/index-4.js to see what the TypeScript compiler did to the code.
 */

export class UserAccount {
  name: string
  id: number

  // TODO: Try adding a username property to the class
  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }

  print() {
    console.log(`User: ${this.name}, ${this.id}`)
  }
}

const user6 = new UserAccount('Hayes', 6)
console.log(user6.print())
