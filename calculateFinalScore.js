function calculateFinalScore(obj) {
    if(typeof obj !== "object"){
        return  "Invalid Input"
    }
    if(typeof obj.name !== "string" || typeof obj.testScore !== "number" || typeof obj.schoolGrade !== "number" ||typeof obj.isFFamily !== "boolean" || obj.testScore > 50 || obj.schoolGrade > 30){
        return  "Invalid Input"
    }
    let familyScore = 0
    if(obj.isFFamily === true){
        familyScore = 20
    }
    const totalScore = obj.testScore + obj.schoolGrade + familyScore

    if(totalScore >= 80){
        return true
    }
    return false
    
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
