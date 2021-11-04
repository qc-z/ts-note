## 函数

### 1 函数类型表达式

> **描述函数最简单的方法是使用函数类型表达式。这些类型在语法上类似于箭头函数:**

```javascript
// 编写一个函数接受(一个函数为参数，该函数接受一个string),并调用该函数
function greeter(fn: (a: string) => void) {
  fn('a')
}
function printToConsole(str: string) {
  console.log(str)
}
greeter(printToConsole)
// 注意点
// 语法(a: string) = > void 表示“具有一个类型为 string 的参数(名为 a)的函数，该函数没有返回值”。就像函数声明一样，如果没有指定参数类型，它就是隐式的。
// 如果函数没有返回值那么它就返回一个void
```

​

### 2 类型别名

> **作用跟函数类型表达式一样**

```javascript
type GreetFunction = (a: string) => void
function geetter(fn: GreetFunction) {}
```

### 3 呼叫签名

> **在 JavaScript 中，函数除了可调用之外，还可以具有属性。但是，函数类型表达式语法不允许声明属性。如果我们想用属性来描述可调用的东西，我们可以用对象类型来写一个调用签名**

```javascript
type descriptFunction = {
  description: string
  (someArg: number): void
}
function dosomething(fn: descriptFunction) {
  console.log(fn.description + ' returned ' + fn(6))
}
```

### 4 构造签名

> **函数也可以用新的操作符来调用。引用这些作为构造函数，因为它们通常会创建一个新对象。你可以通过在调用签名前面添加 new 关键字来写一个构造签名:**

```javascript
type descriptFunction = {
  new (someArg: number): void
}
function dosomething(fn: descriptFunction) {
  return new fn(6)
}

// 有些对象，比如 JavaScript 的 Date 对象，可以使用或不使用 new 来调用。您可以任意组合调用和构造同一类型的签名:

type CallOrConstruct = {
  new (s: string): Date
  (s: number): number
}
```

### 5 通用函数

> **这个函数完成它的工作，但不幸的是返回类型为 any。如果函数返回数组元素的类型会更好。**

```javascript
function firstElement(arr: any[]) {
  return arr[0]
}
```

> **​**

​

是使用尽可能少的类型参数使用尽可能少的类型参数
​
