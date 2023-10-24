console.log('loaded')
// toSorted、toReversed、toSpliced、with、findLast、findLastIndex
const arr = [1,2,3,4]

const sortedArr = arr.toSorted((a,b) => b-a)

const reversedArr = arr.toReversed()

const splicedArr = arr.toSpliced(0,1)

const withArr = arr.with(0,10)

console.log(arr, sortedArr, reversedArr, splicedArr, withArr);

const array = [1,2,3]
const item = array.findLast(n => n % 2 === 1)
const index = array.findLastIndex(n => n % 2 === 1)

console.log(item, index);