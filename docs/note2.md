类型断言
as HTMLCanvasElement 推荐 更具体
<HTMLCanvasElement>

const ->字面量
let var 在对象里面声明，string 就是 string，因为后面有可能被重新复制
解决方案:
1 类型断言 不优雅
2 const req = {} as const

null undefined 缺失或者未初始化值

非空断言 !
x!.toFied()

缩小范围

functionisFish(pet: Fish | Bird): petisFish {
return (petasFish).swim !== undefined;
}

// Both calls to 'swim' and 'fly' are now okay.
letpet = getSmallPet();

if (isFish(pet)) {
pet.swim();
} else {
pet.fly();
}

嗯，打字稿还是不知道该怎么做。我们遇到了这样一个问题: 我们比类型检查器更了解我们的值。我们可以尝试使用非空断言(a！在 shape.radius 之后)来说桡骨确实存在
