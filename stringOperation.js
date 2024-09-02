// string slice

let words = "I am a hard working person."

console.log(words.slice(2,9))

// string split
let word = words.split(" ")
console.log(word)


// string join

let wordss = word.join(" ")
console.log(wordss)


// concat two string

first = "Akash"
last = "Paul"
// first method using + sign
fullname1 = first + " " + last
console.log(fullname1)


// second method using ,concat() function
fullname2 = first.concat(" ", last)
console.log(fullname2)