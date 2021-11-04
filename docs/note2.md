# TypeScript 缩小范围

### 1 Type Assertions 类型断言

```javascript
// HTMLCanvasElement比HTMLElement更具体
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// 尖括号语法(更推荐上面那个，因为在tsx 文件冲突)
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

```

### 2 var let const 的区别

#### Literal Types 文字类型

let，var 类型是 string
const 就是具体的值
![image.png](https://cdn.nlark.com/yuque/0/2021/png/22303167/1635921107862-4b5075cc-8eaa-4f4b-af97-aece249c537c.png#clientId=u0d4e7755-5338-4&from=paste&height=347&id=u63c73750&margin=%5Bobject%20Object%5D&name=image.png&originHeight=694&originWidth=1366&originalType=binary&ratio=1&size=113960&status=done&style=none&taskId=u34e009fd-7b6f-499f-b57c-44ce4c51cb9&width=683)

#### Literal Inference 字面推理

```javascript
// 不会假设将1分配给先前有0的字段是一个错误。另一种说法是 obj.counter 必须具有类型编号，而不是0，因为类型用于决定读取和写入行为。
const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}
// 在下面的示例中，req.method 被推断为 string，而不是“ GET”。因为代码可以在 req 的创建和 handleRequest 的调用之间进行计算，handleRequest 可以为 req.method 分配一个新字符串，比如“ GUESS”，所以 TypeScript 认为这段代码有错误。
// 解决方案:
// 1 类型断言 不优雅
// 2 const req = {} as const


// bad example
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

// good example1
const req = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req.url, req.method as "GET");

// good example2
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);



```

决定你的读取和写入
​

### 2 缩小范围

1. typeof type guards 类型保护
1. Truthiness narrowing 真实性缩小
1. Equality narrowing 平等缩小
1. The in operator narrowing 使用 in
1. instanceof narrowing 使用 instanceof
1. Assignments 工作分配
1. Control flow analysis 控制流分析
1. Using type predicates 使用类型谓词
1. Discriminated unions 可识别联合

非空断言(!) x!.toFied()

```javascript
// Hmm, TypeScript still doesn’t know what to do here. We’ve hit a point where we know more about our values than the type checker does. We could try to use a non-null assertion (a ! after shape.radius) to say that radius is definitely present.

// 嗯，打字稿还是不知道该怎么做。我们遇到了这样一个问题: 我们比类型检查器更了解我们的值。我们可以尝试使用非空断言(a！在 shape.radius 之后)来说桡骨确实存在。

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius! ** 2;
  }
}
```

10. The never type 使用 nerver
11. Exhaustiveness checking 彻底检查

​
