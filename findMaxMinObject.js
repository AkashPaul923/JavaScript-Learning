// find maximum amd minimum value from an array without using max min function where array element ia object

const array = [
    {brand : "samsung" , price : 30000 , color : "black"},
    {brand : "xiaomi" , price : 28000 , color : "black"},
    {brand : "oppo" , price : 31000 , color : "black"},
    {brand : "iphone" , price : 100000 , color : "black"},
    {brand : "vivo" , price : 24000 , color : "black"},
    {brand : "motorola" , price : 51000 , color : "black"},
    {brand : "walton" , price : 10000 , color : "black"},
    {brand : "symphone" , price : 12000 , color : "black"},
]

function maxValue(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(max.price < num.price){
        max = num
      }  
    }
    return max
}
function minValue(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(min.price > num.price){
        min = num
      }  
    }
    return min
}


const max = maxValue(array)
const min = minValue(array)
console.log("The maximum price phone is :",max,"\nThe minimum price phone is :",min)



// output:
// The maximum price phone is : { brand: 'iphone', price: 100000, color: 'black' } 
// The minimum price phone is : { brand: 'walton', price: 10000, color: 'black' }