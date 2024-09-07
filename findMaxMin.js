// find maximum amd minimum value from an array without using max min function

const array = [36, 45, 69, 75, 9, 68, 99, 74]

function maxValue(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(max < num){
        max = num
      }  
    }
    return max
}
function minValue(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(min > num){
        min = num
      }  
    }
    return min
}


const max = maxValue(array)
const min = minValue(array)
console.log("The maximum value is :",max,"\nThe minimum value is :",min)


/**
 * output
 * The maximum value is : 99 
   The minimum value is : 9
*/ 