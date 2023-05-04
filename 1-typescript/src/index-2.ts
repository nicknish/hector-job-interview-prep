/**
 * In this exercise, we're going to add some basic TypeScript features to our
 * code.
 *
 * Instructions:
 *
 * 1. Instead of `npm run build`, we're going to run `npm run dev`. If you
 *    notice in the package.json file, the `dev` command runs the same thing as
 *    the `build` command, with exception to the `--watch` flag. This tells
 *    TypeScript to run in "watch mode", which will compile any code as it
 *    changes.
 * 2. Run `node dist/index-2.js`.
 * 3. Check dist/index-2.js to see what the TypeScript compiler did to the code.
 * 4. Add a typo to the helloWorld variable and watch how the compiler catches
 *    the error. If you're using VSCode, you'll see a red squiggly line under
 *    the variable name. Hover over the variable name to see the error. VSCode
 *    has similar functionality as the TypeScript compiler because it uses the
 *    TypeScript compiler under the hood.
 */

const helloWorld: string = 'Hello World!'
console.log(helloWorld)
console.log(`Type: ${typeof helloWorld}`)
