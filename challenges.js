/*
let massMark = 78
let massJohn = 92

let heightMark = 1.69
let heightJohn = 1.95


//Cmnd / to // all the selected lines
// massMark = 95
// massJohn = 85

// heightMark = 1.88
// heightJohn = 1.76

const bmiMark = massMark / heightMark ** 2
const bmiJohn = massJohn / (heightJohn * heightJohn)
const bmiCommon = bmiMark + bmiJohn
console.log(bmiMark, bmiJohn, bmiCommon)


if (bmiMark > bmiJohn) {
    console.log(`Mark´s BMI ${bmiMark} is higher than Jone´s ${bmiJohn}`)
} else {
    console.log(`John´s BMI (${bmiJohn}) is lower than Mark´s (${bmiMark})`)

}




//#3


const dolphins1 = 96
const dolphins2 = 108
const dolphins3 = 89

const koalas1 = 88
const koalas2 = 91
const koalas3 = 110

const dolphinsScore = dolphins1 + dolphins2 + dolphins3
console.log(dolphinsScore)
const koalasScore = koalas1 + koalas2 + koalas3
console.log(koalasScore)
console.log(dolphinsScore <= koalasScore)

if (dolphinsScore < koalasScore) {
    console.log("The winners are Koalas!")
} else if (dolphinsScore > koalasScore) {
    console.log("The winners are dolphins!")
} else {
    console.log("A draw!")
}


const dolphins1 = 95
const dolphins2 = 100
const dolphins3 = 101

const koalas1 = 100
const koalas2 = 95
const koalas3 = 100

const minScore = 100

// const dolphinsWin1 = dolphins1 > koalas1
// const draw1 = dolphins1 === koalas1
// console.log(draw1)

// if (dolphinsWin1 && dolphins1 >= minScore) {
//     console.log("Dolphins win!")
// } else if (draw1 && draw1 >= minScore) {
//     console.log("A draw!")
// } else if (!dolphinsWin1 && koalas2 >= minScore) {
//     console.log("Koalas win!")
// }

const dolphinsWin = (dolphins1 + dolphins2 + dolphins3) / 3
const koalasWin = (koalas1 + koalas2 + koalas3) / 3
console.log(dolphinsWin, koalasWin)

minWinDolphins = dolphinsWin >= minScore
minWinKoalas = koalasWin >= minScore

if (dolphinsWin > koalasWin && minWinDolphins) {
    console.log("Dolphins won!")
} else if (koalasWin > dolphinsWin && minWinKoalas) {
    console.log("Koalas won!")
} else if (dolphinsWin === koalasWin && minWinDolphins && minWinKoalas) {
    console.log("It´s a draw!")
} else {
    console.log("No one wins the trophy 🏆")
}
*/


//#4

const bill = 430

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`)




// const total = bill >= 50 && bill <= 300 ? `The bill was ${bill}, the tip was ${bill * 0.15}, and the total value was ${bill + bill * 0.15}` :
//     `The bill was ${bill}, the tip was ${bill * 0.2}, and the total value was ${bill + bill * 0.2}`


// console.log(total)



