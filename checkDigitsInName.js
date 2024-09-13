function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input" 
    }
    for(const digit of name){
        if(digit === '0' || digit === '1' || digit === '2' || digit === '3' || digit === '4' || digit === '5' || digit === '6' || digit === '7' || digit === '8' || digit === '9' ){
            return true
        }
        
    }
    return false
}
console.log(checkDigitsInName("Raj123"))