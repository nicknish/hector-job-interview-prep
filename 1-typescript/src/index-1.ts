/**
 * In this exercise, we're simply printing out a string to the console. Notice
 * that this is a TypeScript file (.ts). When we run our "build command", npm
 * run build, TypeScript will compile this file into JavaScript. The compiled
 * JavaScript will be placed in the dist folder.
 *
 * Instructions:
 *
 * 1. Run `npm run build`, then run `node dist/index-1.js`.
 * 2. Verify that the output is Hello World!
 * 4. Check dist/index-1.js to see what the TypeScript compiler did to your code.
 *    Because we don't use any TypeScript features, the compiled JavaScript
 *    should be identical to this file.
 * 4. Try running `node src/index.ts`. Surprisingly, this does not fail, but it
 *    will later on when we start using TypeScript features.
 */

console.log('Hello World!')
