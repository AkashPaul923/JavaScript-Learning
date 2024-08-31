/**Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/ 

var fruits = ["mango", "banana", "lichi", "watermelon"]

if(Array.isArray(fruits)){
    console.log("This variable is Array")
}
else{
    console.log("This variable is not array")
}