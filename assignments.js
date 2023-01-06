/*





const country = "Ukraine"
const continent = "Eurasia"
let population = 38000000

console.log(country, continent, population)

let isIsLand = true;
const language = "Ukrainian"

console.log(typeof isIsLand)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

population = 39000000
console.log(country, continent, population)



//population = population / 2
//console.log(population)
//population++
console.log(population)
let populationFinland = 3000000
console.log(population > populationFinland)
console.log(population < 33000000)
let description = `${country} is in ${continent} and its ${population} speak ${language}`
console.log(description)

//type cohersion

console.log("I´m " + 23 + " years old")
console.log("I´m " + "23" + " years old")
console.log("23" - "10" - 3)

let n = "1" + 1
n = n - 1
console.log(n)




1. Declareavariable'numNeighbours'basedonapromptinputlikethis: prompt('How many neighbour countries does your country have?');
2. Ifthereisonly1neighbour,logtotheconsole'Only1border!'(uselooseequality == for now)
3. Useanelse-ifblocktolog'Morethan1border'incase'numNeighbours' is greater than 1
4. Useanelseblocktolog'Noborders'(thisblockwillbeexecutedwhen 'numNeighbours' is 0 or any other value)
5. Testthecodewithdifferentvaluesof'numNeighbours',including1and0.
6. Change==to===,andtestthecodeagain,withthesamevaluesof
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally,convert'numNeighbours'toanumber,andwatchwhathappensnow
when you input 1
8. Reflectonwhyweshouldusethe===operatorandtypeconversioninthis
situation


const numNeighbours = Number(prompt("How many neighbour countries does your country have?"))
console.log(typeof numNeighbours)

if (numNeighbours === 1) { console.log("Only 1 border!") }
else if (numNeighbours > 1) {
    console.log("More than 1 border")
} else if (numNeighbours === 0) {
    console.log("No borders")
}



const country = "Canada"
const population = 38000000
const language = "English"

let isIsland = false;


if (language === "English" && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country}`)
} else {
    console.log(`${country} does not meet your criteria`)
}


// Switch statement

const language = "spanish"

switch (language) {
    case "chinese":
        console.log("MOST number of native speakers")
        break

    case "spanish":
        console.log("2nd place in number of native speakers")
        break


    case "english":
        console.log("3rd place")
        break


    case "hindi":
        console.log("Number 4")
        break

    case "arabic":
        console.log("5th most spoken language")
        break

    default:
        console.log("Great language too!")



}


const country = "Ukraine"
const population = 38

const populationNumber = population >= 33 ? `${country}´s population is above average` : `${country}´s population is below average`

console.log(populationNumber)

*/



