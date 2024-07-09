## ES15

2024 年 6 月 26 日，第 127 届 Ecma 大会批准了 ECMAScript 2024 语言规范，这意味着它现在正式成为标准。

## 新特性

### String

#### Unicode 支持增强
* String原型上新增两个方法isWellFormed和toWellFormed

### 对象

### 数组
* Object.groupBy
* Map.groupBy

数组的分组，一个返回普通对象，一个返回 Map


### Buffer
* ArrayBuffer.prototype.resizable

返回是否可调整Buffer大小

### Promise

* Promise.withResolvers()：允许创建一个新的 Promise，并同时获得 resolve 和 reject 函数。
* Atomics.waitAsync()：静态方法在共享内存位置异步等待并返回一个Promise


### 环境

- Chrome 117 以上