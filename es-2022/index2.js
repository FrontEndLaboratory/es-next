
// 使用了静态代码块，代码逻辑更收敛
class C {
  static x = 1
  static y
  static z
  static {
    try {
      // 这里的 this 代表 C 而不是 C 的实例
      const obj = doSomeThingWith(this.x)
      this.y = obj.y
      this.z = obj.z
    }
    catch {
      console.log(1)
      this.y = ''
      this.z = ''
    }
  }
}

// 还有个特殊的能力：访问私有属性
let getPrivateField
class D {
  #privateField
  constructor(v) {
    this.#privateField = v
  }
  static {
    getPrivateField = (d) => d.#privateField
  }
}

console.log(getPrivateField(new D('private value')))


class E {
  #brand = 0

  static isE(obj: C) {
    return #brand in obj
  }
}

console.log(E.isE({ brand: 1 }))