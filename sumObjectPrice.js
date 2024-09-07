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


function addPrice(products){
    let sum = 0
    for(const product of products){
        sum += product.price
    }
    return sum
}

const total = addPrice(array)
console.log("Total price = ",total)

// output: Total price =  286000