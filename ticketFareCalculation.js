/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


var age = 20 
fare = 800

if(age <= 10){
    console.log("You don't need to pay")
}
else if(age > 10 &&  age < 24){
    console.log("You are get 50% discount. Fare : TK")
    fare = fare - (fare * 0.5)
    console.log(fare)
}
else if(age >=60){
    console.log("You are get 15% discount. Fare : TK")
    fare = fare - (fare * 0.15)
    console.log(fare)
}
else{
    console.log("Fare : TK")
    console.log(fare)
}
