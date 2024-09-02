// string reverse
let sentence = "I am learning web development"

// first method
let reverse = ""
for( let word of sentence){
    reverse = word + reverse
}
console.log(reverse)

// second method
let rev = ""
for(let i = 0 ; i < sentence.length ; i++){
    rev = sentence[i] + rev
} 
console.log(rev)

// 3rd method
let revs = sentence.split("").reverse().join("")
console.log(revs)