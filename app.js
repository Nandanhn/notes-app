const validator=require('validator')
const getNotes=require("./notes")
var msg=getNotes()
console.log(msg)

// const add=require("./utils")
// var sum=add(-4,-2)
// console.log(sum)

console.log(validator.isEmail("nandans"))
console.log(validator.isEmail("hnnandan15@gmail.com"))

console.log(validator.isURL("https://nandan.com"))
console.log(validator.isURL("https/nandan.com"))
