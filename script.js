/*let js = "amazing";
console.log(40 + 8 * 3 - 1)
console.log("Jonas")
console.log(23)

let firstName = "Holly";
console.log(firstName)
console.log(firstName)
console.log(firstName)



let javascriptIsFun = true
console.log(javascriptIsFun)

console.log(typeof javascriptIsFun)
//console.log(typeof 23)
//console.log(typeof "Becca")

javascriptIsFun = "YES!"
console.log(typeof javascriptIsFun)

let year;
console.log(year)
console.log(typeof year)

year = 1991;
console.log(year)
console.log(typeof year)

console.log(typeof null)

// re-assigning the value, mutating the age variable
let age = 30;
age = 31

// value cannot be changed

const birthYear = 1991
//birthYear = 1990

var job = "pogrammer";
job = "teacher"


// math operators
const now = 2037
const ageBecca = now - 2020
const ageJohn = now - 2019
console.log(ageBecca, ageJohn)

console.log(ageBecca * 2, ageJohn / 10, 2 ** 3)
//2**3 means 2 to the power of 3=2*2*2

const firstName = "John"
const lastName = "Hugh"
console.log(firstName + " " + lastName)

let x = 10 + 5 //15
x += 10; // x = x+10=25

x *= 4 // x=x*4=100
x++ // x= x+1
x-- //x = x-1
console.log(x)

// comparison operators

console.log(ageBecca > ageJohn) // <,>,<=,>=
console.log(ageBecca >= 18)

const isFullAge = ageBecca >= 18

console.log(now - 1991 > now - 2018)


const now = 2037
const ageBecca = now - 2020
const ageJohn = now - 2019
console.log(now - 1991 > now - 2018)


let x, y;
x = y = 25 - 10 - 5//x=y=10, x=10
console.log(x, y)


const averageAge = (ageBecca + ageJohn) / 2
console.log(ageBecca)
console.log(ageJohn)
console.log(averageAge)


const firstName = "Daria"
const job = "teacher"

const birthYear = 1991
const year = 2037

const daria = "I´m " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"
console.log(daria)

const dariaNew = `I´m ${firstName}, a ${year - birthYear} year old ${job} `
console.log(dariaNew)

console.log(`Just a regular string`)

console.log("String with \n\ multiple\n\ lines")

console.log(`String
multiple
lines`)

//Strings and template literals
//If/else
const age = 15


if (age >= 18) {
    console.log(`Sarah can start driving license 🙍‍♀️`)

} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century)


const inputYear = "1991"
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number("Jonas"))

console.log(typeof NaN)
console.log(String(23), 23)


*/
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean("Jonas"))
console.log(Boolean({}))

// 0 will be converted to false

const money = 100
if (money) {
    console.log("Don´t spend it all")
} else {
    console.log(`You should get a job`)
}
// undefined is a falsy value
let height
if (height) {
    console.log("Yay! Height is defined")
} else {
    console.log("Height is UNDEFINED")
}