import { User } from './index-3'

// .............................................................. //
// Optional types: You can make a property optional by adding a question mark
// after the property name. For example, if you have an object with a name and
// age property, you can make the age property optional by adding a question
// mark after the property name.

interface Person {
  name: string
  age?: number
}

// .............................................................. //
// Optional properties & extending interfaces: Notice we can extend the User
// interface with an optional property

interface EnhancedUser extends User {
  profile_img?: string
}

function getProfileImg(user: EnhancedUser): string {
  // TODO: Complete this
}

// .............................................................. //
// Casting and `any` type: There are times when TypeScript doesn't know what
// type something is. In those cases, you can use the `any` type. It's not
// recommended to use `any` because it defeats the purpose of using TypeScript.
// However, there are times when you need to use it. For example, when you're
// working with a 3rd party library that doesn't have type definitions.

function getProfileUrl(user: User): string {
  return (user as any).profile_img
}

function getProfileUrl2(user: User): string {
  return (user as EnhancedUser).profile_img!
}

// .............................................................. //
// Never type: The never type is used when you know something will never happen.
// For example, if you have a function that always throws an error, you can use
// the never type to tell TypeScript that the function will never return
// anything.

function throwError(message: string): never {
  throw new Error(message)
}

// .............................................................. //
// Generic types: Generic types are used when you want to create a type that
// can be used with different types. For example, the Array type is a generic
// type. It can be used with any type. You can also create your own generic
// types.

function getFirstItem<T>(items: T[]): T {
  return items[0]
}
const firstItem = getFirstItem([1, 2, 3])
const firstItem2 = getFirstItem(['a', 'b', 'c'])

// .............................................................. //
// Extends: You can use the extends keyword to tell TypeScript that a generic
// type must extend a certain type. For example, if you want to create a
// function that only accepts numbers, you can use the extends keyword to tell
// TypeScript that the generic type must extend the number type.

function getFirstItem2<T extends number>(items: T[]): T {
  return items[0]
}
const firstItem3 = getFirstItem2([1, 2, 3])
// @ts-expect-error
const firstItem4 = getFirstItem2(['a', 'b', 'c'])

// .............................................................. //
// keyof: The keyof keyword is used to get the keys of an object. For example,
// if you have an object with a name and age property, you can use keyof to get
// the keys of the object.

interface Person2 {
  name: string
  age: number
}
type PersonKeys = keyof Person // 'name' | 'age'

// .............................................................. //
// Function types: You can create a function type by using the arrow syntax.
// For example, if you have a function that accepts a number and returns a
// string, you can create a function type for it.

type GetGreeting = (name: string) => string
const getGreeting: GetGreeting = name => `Hello ${name}!`

// .............................................................. //
// 3rd party types: You can use 3rd party type definitions by installing them
// with npm. For example, if you want to use the lodash library, you can install
// the @types/lodash type definitions with npm. You'll see how this works in the
// next sections when we add TypeScript to a React application.

// .............................................................. //
