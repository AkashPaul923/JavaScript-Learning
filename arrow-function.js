// variable_dataType function_name = (parameter) => process

const add = (x , y) => x + y
console.log(add( 5 , 10))

const getName = (person) => person.name
const student = { name : 'Akash', age : 22}
console.log(getName(student))


const third = (array) => array[2]
const arr = [20 , 30 , 45 , 46 , 96 , 25]
console.log(third(arr))