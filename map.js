const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// map(function)
const numMap = numbers.map(x => x * x)
console.log(numMap);

/** OutPut
 * [ 1,  4,  9, 16, 25, 36, 49, 64, 81]
 */


// forEach
const numForEach = numbers.forEach(x => console.log(x))

/**
 * 1
2
3
4
5
6
7
8
9
 */

const numFilter = numbers.filter(x => x % 2)
console.log(numFilter);
// output
// [ 1, 3, 5, 7, 9 ]


const numFind = numbers.find(x => x > 3)
console.log(numFind);
// output : 4



const numReduce = numbers.reduce((p, c) => p + c, 0)
console.log(numReduce);
// output: 45