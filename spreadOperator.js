// spread operator -> ( ... )
const numberOne = [1, 2, 3]
const numberTwo = [4, 5, 6]
const numbersOne = [numberOne , numberTwo]
const numbersTwo = [...numberOne, ...numberTwo]
console.log('1st Array ', numbersOne , '2nd Array ', numbersTwo)

// output
// 1st Array  [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] 
// 2nd Array  [ 1, 2, 3, 4, 5, 6 ]