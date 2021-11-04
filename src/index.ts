// function fn(s: String) {
//   // No error?
//
// }
// fn('42')

// const user = {
//   name: 'Daniel',
//   age: 26
// }

// user.location

// const announcement = 'Hello World!'

// // How quickly can you spot the typos?
// announcement.toLocaleLowercase()
// announcement.toLocalLowerCase()

// // We probably meant to write this...
// announcement.toLocaleLowerCase()

// function flipCoin() {
//   // Meant to be Math.random()
//   return Math.random() < 0.5
// }

// function greeter(fn: (a: string) => void) {
//   fn('Hello, World')
// }

// function printToConsole(s: string) {
//
// }

// greeter(printToConsole)
// function firstElement(arr: any[]) {
//   return arr[0]
// }

// function firstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0]
// }
// const strs = ['Hello', 'World']
// const u = firstElement(strs)
// const r = firstElement(strs)

// function minimumLength<Type extends { length: number }>(obj: Type, minimum: number): Type {
//   if (obj.length >= minimum) {
//     return obj
//   } else {
//     return { length: minimum }
//   }
// }
// function getters(fn: (a: string) => void) {
//   fn('a')
// }
// function printToConsole(str: string) {
//   console.log(str)
// }
// getters(printToConsole)

// type descriptFunction = {
//   description: string
//   (someArg: number): void
// }
// function dosomething(fn: descriptFunction) {
//   console.log(fn.description + ' returned ' + fn(6))
// }
// type descriptFunction = {
//   new (someArg: number): void
// }
// function dosomething(fn: descriptFunction) {
//   return new fn(6)
// }

// type CallOrConstruct = {
//   new (s: string): Date
//   (s: number): number
// }

function firstElement(arr: number[] | string[]) {
  return arr[0]
}
firstElement([1, '2'])
