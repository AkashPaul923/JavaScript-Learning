
function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true
    }
    else if(year % 400 === 0){
        return true
    }
    else{
        return false
    }
}

const isleap1 = isLeapYear(1900)
const isleap2 = isLeapYear(2000)
const isleap3 = isLeapYear(2024)
const isleap4 = isLeapYear(2033)
console.log(isleap1, isleap2, isleap3, isleap4)


