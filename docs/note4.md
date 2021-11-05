## 对象类型


### Property Modifiers属性修饰符
> 对象类型中的每个属性可以指定两个事项: 类型、属性是否可选以及是否可以将属性写入。大多数时候，我们会发现自己处理的对象可能有一个属性集。在这些情况下，我们可以通过添加一个问号(?)将这些属性标记为可选的直到他们的名字结束。

```javascript
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}
 
function paintShape(opts: PaintOptions) {
  // ...
}
 
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
```
### 
Extending Types扩展类型
```javascript
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
 
interface AddressWithUnit extends BasicAddress {
  unit: string;
}
// niterface A extends B,C 多个
```
### 
### Intersection Types交叉类型
> 接口允许我们通过扩展其他类型来构建新的类型。提供了另一种称为交集类型的构造，主要用于组合现有的对象类型，使用 & 运算符定义交集类型。

```javascript
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
```
### 
readonly
> 属性也可以标记为 TypeScript 的只读属性。虽然它不会在运行时改变任何行为，但是在类型检查期间不能写入标记为 readonly 的属性。

管理 readonly 意味着什么的预期是很重要的。在开发打字脚本的过程中，向用户表明应该如何使用一个对象是非常有用的。在检查这两个类型是否兼容时，TypeScript 没有考虑这两个类型上的属性是否是只读的，因此只读属性也可以通过别名来改变。
```javascript
interface Person {
  name: string;
  age: number;
}
 
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
 
let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};
 
// works
let readonlyPerson: ReadonlyPerson = writablePerson;
 
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
```
​

### Index Signatures索引签名
> 有时候，您不能提前知道类型属性的所有名称，但是您知道值的形状。在这些情况下，你可以使用索引签名来描述可能的值的类型，例如:

```javascript
interface StringArray {
  [index: number]: string;
}
 
const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
```
### 
### Interfaces vs. Intersections区别(不理解)
> 我们刚刚研究了两种组合类型的方法，这两种类型相似，但实际上略有不同。对于接口，我们可以使用 extends 子句从其他类型进行扩展，而且我们可以对交叉点进行类似的操作，并使用类型别名命名结果。两者之间的主要区别在于如何处理冲突，这种区别通常是在接口和交集类型的类型别名之间选择一个而不是另一个的主要原因之一。

​

### Generic Object Types泛型对象类型
> 我们可以使用 unknown，但这意味着在我们已经知道内容类型的情况下，我们需要进行预防性检查，或者使用容易出错的类型断言。

```javascript
interface Box {
  contents: unknown;
}
 
let x: Box = {
  contents: "hello world",
};
 
// we could check 'x.contents'
if (typeof x.contents === "string") {
  console.log(x.contents.toLowerCase());
}
 
// or we could use a type assertion
console.log((x.contents as string).toLowerCase());
```
​

​

