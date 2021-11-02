# TS 学习第一天笔记

### 1 TS 是什么

#### 1.1 TypeScript 是 JavaScript 的超集。是带有类型语法的 JavaScript

![](./assets/TSandJS.jpeg#id=zyPc4&originalType=binary&ratio=1&status=done&style=none)

### 2 如何编译成 JS

#### 2.1 全局安装 typescript，项目内安装也可

```shell
npm install -g typescript
```

#### 2.2 编写一个 index.ts，执行命令

```shell
tsc helloworld.ts
# helloworld.ts => helloworld.js
```

##

### 3 TypeScript 基础类型

#### 3.1 Boolean

```javascript
let isDone: boolean = false
```

#### 3.2 Number

```javascript
let count: number = 18
```

#### 3.3 String

```javascript
let name: string = 'ts'
```

#### 3.4 Array

```javascript
// 数字数组
let list: number[] = [1,2,3];
// 泛型写法
let list: Array<number> =  [1,2,3];

// 字符串数组
let list: string[] = ['1','2','3'];
// 泛型写法
let list: Array<string> =  [1,2,3];

// 混合
.......
```

#### 3.5 Any

#### 3.6 Type

我们通过直接在类型注释中编写对象类型和联合类型来使用它们。这很方便，但是通常希望多次使用同一类型并使用单个名称引用它。
理解: 不必每次都定义类型，拿来就用

```javascript
type Points {
	x: number;
	y: number;
}
// Exactly the same as the earlier example
functionprintCoord(pt: Point) {
console.log("The coordinate's x value is " + pt.x);
console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x:100, y:100 });
```

#### 3.7 Interfaces

> **大多数情况下，您可以根据个人喜好进行选择，TypeScript 会告诉您是否需要其他类型的声明。如果您想要启发式，请使用 interface 直到您需要使用 type.** > **个人理解: interface 不能需求再考虑使用 type**

```javascript
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}

printCoord({ x: 100, y: 100 })

// TypeScript 只关心我们传递给 printCoord 的值的结构——它只关心它是否具有预期的属性。仅仅关注类型的结构和功能，这就是为什么我们称TypeScript 为结构类型系统。
```

#### 3.8 .......

### 缩小范围
