/**
 * In this final exercise, we're going to explore basic unions, arrays, objects.
 *
 * Instructions:
 * 1. If you're not already running `npm run dev`, run it.
 * 2. Run `node dist/index-5.js`.
 * 3. Check dist/index-5.js to see what the TypeScript compiler did to the code.
 */

// .............................................................. //
// Try removing the @ts-expect-error line, read the error, and fix it

type ToggledState = true | false

let toggleState: ToggledState = true
toggleState = false
// @ts-expect-error
toggleState = 'true'

// .............................................................. //
// Try removing the @ts-expect-error line, read the error, and fix it

type CheckboxStates = 'checked' | 'unchecked' | 'indeterminate'
let checkBoxState: CheckboxStates = 'checked'
checkBoxState = 'unchecked'
checkBoxState = 'indeterminate'
// @ts-expect-error
checkBoxState = 'other'

// .............................................................. //

let windowState: 'open' | 'closed' | 'minimized' | 'maximized' = 'closed'
windowState = 'open'

// .............................................................. //
// Try removing the @ts-expect-error line, read the error, and fix it

type CarMake = 'Ford' | 'Toyota' | 'Chevy'

interface Car {
  make: CarMake
  model: string
}

const arr1 = [1, 2, 3]
const arr2 = ['a', 'b', 'c']
const arr3 = [1, 'a', true]
const arr4 = [{ name: 'Hayes' }, { name: 'Nick' }]

// @ts-expect-error
const arr5: Car[] = [{ make: 'Toyota' }]
const arr8: CarMake[] = ['Ford', 'Toyota', 'Chevy']

// @ts-expect-error
const arr6: Array<Car> = [{ make: 'Ford' }]

// @ts-expect-error
const car1: Car = { make: 'Toyota' }
const arr7 = [car1]

// .............................................................. //
// What if you don't know what the shape of a parameter looks like, but we know
// its an object?

function printObject(obj: object) {
  console.log(obj)
}
console.log(printObject({ name: 'Hayes' }))

function printObject2(obj: Record<string, any>) {
  console.log(obj)
}
console.log(printObject2({ name: 'Hayes' }))

function printObject3(obj: Record<'make', CarMake>) {
  console.log(obj)
}
console.log(printObject3({ make: 'Ford' }))

// .............................................................. //

enum Color {
  Red,
  Green,
  Blue,
}

const red = Color.Red
const green = Color.Green
const blue = Color.Blue
