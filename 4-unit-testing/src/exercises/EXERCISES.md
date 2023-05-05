In this exercise, you'll create your own simplified testing library.

# Exercise 1

Create the basic structure of a testing library.

## Requirements

- Create a function called `describe`. This function defines a test suite of related test cases. It
  takes in a string `testSuiteName` and a callback `func`, which makes one or more calls to `test`.

- Create a function called `test`. This function defines a single test case in a test suite and is
  called within a `describe`'s callback func. It takes in a string `testCaseName` and its own
  callback `func`, which makes one or more calls to expect

- Create a function called `expect`. This function defines a single check in a test case and is
  called within an `test`'s callback `func`. It takes in an arbitrary parameter `actual` and returns
  an object with the following function that is used to compare actual to other values:

  - `expect(actual).toBe(expected)` - This function compares `actual` to `expected` and returns
    `true` if they are _strictly_ equal and `false` otherwise.

- `describe` should console.log the "beginning test suite {testSuiteName}".
- `test` should console.log the "beginning test case {testName}".
- `_toBe` should console.log the result.

## Example

```javascript
describe('sum', () => {
  test('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
```

When you run the file with `node exercises/1-create-your-own-testing-library.js`, the expected
console output should be:

```
beginning test suite "sum"
beginning test case "should add two numbers"
true
```

# Exercise 2

Extend the testing library `expect` function.

## Requirements

- Extend `expect` to have all three of these functions:

  - `expect(actual).toExist()` - This function checks that actual is neither `null` nor `undefined`
  - `expect(actual).toBe(expected)` - Already done
  - `expect(actual).toBeType(type)` - This function checks that `actual` is of the type `type`,
    which can be any string returned by the `typeof` operator

## Example

```javascript
describe('sum', () => {
  test('should add two numbers and the result should have the correct type', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1, 2)).toExist()
    expect(sum(1, 2)).toBeType('number')
  })
})
```

When you run the file, the expected console output should be:

```
beginning test suite "sum"
beginning test case "should add two numbers and the result should have the correct type"
true
true
true
```

# Exercise 3

Extend logging and error handling.

## Requirements

As a test suite and its test cases are executed, they should print the following strings:

```javascript
// When a test suite begins:
'beginning test suite {testSuiteName}'

// When a test suite successfully completes:
'successfully completed test suite {testSuiteName}'

// When a test case begins:
'beginning test case {testCaseName}'

// When a test case successfully completes:
'successfully completed test case {testCaseName)'

// When a test suite fails (because a check in one of its test cases fails):
'failed running test suite {testSuiteName) on test case {testCaseName} with error message {errorMessage}'

// When `expect(actual).toExist()` fails, `errorMessage` should be:
'expected value to exist but got {actual}'

// When `expect(actual).toBe(expected)` fails, `errorMessage` should be:
'expected {actual} to be {expected}'

// When "expect(actual).toBeType(type)" fails, errorMessage should be:
'expected factual} to be of type {type} but got {typeOfActual}'
```

When a check fails, the following things should happen:

1. The relevant `expect` function should throw the appropriate errorMessage
2. The relevant it function should throw an arbitrary error, and its execution should stop.
3. The relevant describe function should print the failure string with console. error (all other
   strings should be printed with console.log), and its execution should stop.

For the sake of simplicity:

- All output strings should be in lowercase letters, with no punctuation whatsoever.
- No modifications should be made to testSuiteName and testCaseName values (they shouldn't be
  lowercased).
- When actual and expected values are printed within error messages, they should be stringified with
  `JSON.stringify()`

## Example

### Example 1

```javascript
describe('Passing Test Suite', () => {
  it('Passing Test Case #1', () => {
    expect('foo').toExist()
    expect(1 + 1).toBe(2)
  })

  it('Passing Test Case #2', () => {
    expect({}).toBeType('object')
  })
})
```

Sample output:

```javascript
// Console logs:
beginning test suite Passing Test Suite
beginning test case Passing Test Case #1
successfully completed test case Passing Test Case
beginning test case Passing Test Case #2
successfully completed test case Passing Test Case #2
successfully completed test suite Passing Test Suite
```

### Example 2

```javascript
describe('Failing Test Suite', () => {
  it('Passing Test Case', () => {
    expect(0).toBe(0)
  })

  it('Failing Test Case', () => {
    expect(true).toBe(true)
    expect(true).toBe(false)
  })

  it('Unreachable Test Case', () => {
    expect('foo').toBe('bar')
  })
})
```

Sample output:

```javascript
// Console logs:
beginning test suite Failing Test Suite
beginning test case Passing Test Case
successfully completed test case Passing Test Case
beginning test case Failing Test Case
// Console errors:
failed running test suite Failing Test suite on test case Failing Test Case with error message expected true to be false
```
