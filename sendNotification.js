function sendNotification(email) {
    if( email.includes("@") !== true){
        return "Invalid Email"
    }
    const names = email.split("@")
    const str = names[0].concat(" sent you an email from ", names[1]) 
    return str
}

console.log(sendNotification("farhan34@yahoo.com"))
