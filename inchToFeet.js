// 12 inches = 1 feet

function inchToFeet(inch){ 
    const feet = parseInt(inch / 12)
     inch = inch % 12
    const result = feet + " feet " + inch + " inch"
    return result
}

const result = inchToFeet(73)
console.log(result)