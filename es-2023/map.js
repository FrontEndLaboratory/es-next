const weak = new WeakMap()

weak.set(Symbol('symbol', {}))

console.log(weak);