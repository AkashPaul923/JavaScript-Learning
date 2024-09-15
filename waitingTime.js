function  waitingTime(waitingTimes  , serialNumber) {
    if(typeof serialNumber !== "number" || Array.isArray(waitingTimes) !== true){
        return "Invalid Input"
    }
    let totalVivaTime = 0
    for(const vivaTime of waitingTimes){
        totalVivaTime += vivaTime
    }
    const avgVivaTime = Math.round(totalVivaTime / waitingTimes.length)
    const avgWaitingTime = avgVivaTime * ((serialNumber - 1) - waitingTimes.length)
    return avgWaitingTime
}

console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10))
