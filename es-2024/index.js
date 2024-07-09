const data = [
  { name: 'John', age: 25 },
  { name: 'John1', age: 21 },
  { name: 'John2', age: 23 },
  { name: 'John3', age: 26 },
  { name: 'John4', age: 25 },
]

// 谷歌浏览器117以上的版本 才能运行

const res = Object.groupBy(data, item => item.age)
