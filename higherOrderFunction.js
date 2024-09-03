const callback = n=>{
    return (n*n)
}

function cube(callback,n){
    return (callback(n)*n)
}
console.log(cube(callback,3))

const a=p=>{
    const b=q=>{
        const c=r=>{
            return p*q*r
        }
        return c
    }
    return b
}

function hi(){
    console.log('Hey')
}
function hello(){
    console.log('hello')
}


setTimeout(hello,1000)

let arr=[1,2,3,4,5,6,7,8,9]
arr.forEach(n=> console.log((n%2==0)))

let even=arr.map(n=> n/2)
console.log(even)
let odd=arr.filter(n=> n%2!=0)
console.log(odd)

const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]

let scoreAbove80=scores.filter((profile)=> profile.score>80)
console.log(scoreAbove80)


/// EXERCISE LEVEL 1 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Q.1 Explain the difference between forEach, map, filter, and reduce.
products.forEach((productlist)=> console.log(productlist.product))
let fruits=products.map((productlist)=> productlist.product)
console.log(fruits)
let cheapfruits=products.filter((productlist=> productlist.price<5))
console.log(cheapfruits)
let totalPrice = products.reduce((acc,curr)=> acc.price+curr.price,1)
console.log(totalPrice)

//Q.2 Define a callback function before you use it in forEach, map, filter or reduce.
let uppercase= country =>{
    return(country.toUpperCase())
}

let lowercase=country=>{
    return(country.toLowerCase())
}

countries.forEach((country)=> console.log(uppercase(country)))
let lowercaseCountries= countries.map((country)=> uppercase(country))
console.log(lowercaseCountries)

//Q.3 Use forEach to console.log each country in the countries array.

countries.forEach((country)=>console.log(country))

//Q.4 Use forEach to console.log each name in the names array.
names.forEach((names)=> console.log(names))

//Q.5 Use forEach to console.log each number in the numbers array.
numbers.forEach((num)=>console.log(num))

//Q.6 Use map to create a new array by changing each country to uppercase in the countries array.
countriesuppercase=countries.map((country)=> country.toUpperCase())
console.log(countriesuppercase)

//Q.7 Use map to create an array of countries length from countries array.
let countriesLength=countries.map((country)=> country.length)
console.log(countriesLength)

//Q.8 Use map to create a new array by changing each number to square in the numbers array
let squares=numbers.map(num=> num*num)
console.log(squares)

//Q.9 Use map to change to each name to uppercase in the names array
let nameupparcase=names.map((names)=> names.toUpperCase())
console.log(nameupparcase)

//Q.10 Use map to map the products array to its corresponding prices.

let prices = products.map((product)=> product.price)
console.log('prices',prices)

//Q.11 Use filter to filter out countries containing land.
let landCountries=countries.filter((country)=>country.includes('land'))
console.log('land countries ',landCountries)

//Q.12 Use filter to filter out countries having six character.
let sixCharacterCountries= countries.filter((countries)=> countries.length==6)
console.log('six character countries ',sixCharacterCountries)

//Q.13 Use filter to filter out countries containing six letters and more in the country array.
sixCharacterCountries= countries.filter((countries)=> countries.length>=6)
console.log('six and more character countries ',sixCharacterCountries)

//Q.14 Use filter to filter out country start with 'E'
let countryStartWithE=countries.filter((country)=> country.startsWith('E'))
console.log('country start with E ',countryStartWithE)

//Q.15 Use filter to filter out only prices with values.
let pricesWithOnlyValues= prices.filter((price) => price!='')
console.log(pricesWithOnlyValues)
console.log(typeof('gaut'))

//Q.16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array){
    let arr=array.filter((element)=> typeof(element)=='string')
    return arr
}
let samplecase=[12,'one',13,'thirteen',14,'fourteen']
console.log(getStringLists(samplecase))

//Q.17 Use reduce to sum all the numbers in the numbers array.
let sum = numbers.reduce((acc,curr)=> acc+curr,0)
console.log('sum',sum)

//Q.18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let sentence=countries.reduce((acc,current)=> acc+''+current+',','')
console.log(sentence," are north european countries")

//Q.19 Explain the difference between some and every
const bools = [true, true, true, true, false, false]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log('example of every ',areAllTrue) 

const areSomeTrue= bools.some((b) => b===true)
console.log("example of some ",areSomeTrue)

//Q.20 Use some to check if some names' length greater than seven in names array
let someNamesLength= names.some((name) => name.length>7)
console.log('some names length greater than 7 is ',someNamesLength)

//Q.21 Use every to check if all the countries contain the word land
let checkLand=countries.every((country)=> country.includes('land'))
console.log(checkLand)

//Q.22 Explain the difference between find and findIndex.

samplenumbers=[12,32,34,45,54,67]
let multipleofFive=samplenumbers.find((num)=> num%5==0)
console.log("multiple of 5 is ",multipleofFive)
//example of findIndex
let indexofmultipleofFive=samplenumbers.findIndex((num) => num%5==0)
console.log('Index of multiple of 5 ',indexofmultipleofFive)

//Q.23Use find to find the first country containing only six letters in the countries array
 let firstcountrysix= countries.find((country) => country.length==6)
 console.log('first countrybwith six letters',firstcountrysix)

//Q.24 Use findIndex to find the position of the first country containing only six letters in the countries array
let indexfirstcountrysix= countries.findIndex((country) => country.length==6)
 console.log('index of first country with six letters ',indexfirstcountrysix)

// Q.25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let findindex=countries.findIndex((country)=> country=='Norway')
console.log('Index of norway ',findindex)

//Q.26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let findIndex=countries.findIndex((country)=> country=='Russia')
console.log("index of russia ",findIndex)

// EXERCISES LEVEL 2 
// Q.1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

let sumprice=products.filter((prdt)=> typeof(prdt.price)=='number').reduce((acc,product)=> acc+product.price,0)
console.log(sumprice)

//Q.2 Find the sum of price of products using only reduce reduce(callback))

let sumofprice=products.reduce((acc,current)=> {
    if(typeof(current.price)=='number')
        return acc+current.price,0})
console.log(sumofprice)


//Q.3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(countries){
    return countries.filter((country)=>country.toLowerCase().includes('land'))
}
console.log('countries with land: ',categorizeCountries(countries))

//Q.4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function arrayOfObjects(countries){
    let required=[]
    let temp=[]
    countries.forEach((country)=> {
        temp=country.split('')
        console.log(temp)
        required.push(
            {Letter:temp[0],
            number: temp.reduce((acc,current)=> current == temp[0] ? acc+=1 : acc,0)
            }
        )

    })
    return required
}

console.log(arrayOfObjects(countries))

//Q.5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirst3Countries(countries){
    let sample=[]
    for(let i=0;i<3;i++){
        sample.push(countries[i])
    }return sample
}

//Q.6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLast3Countries(countries){
    let sample=[]
    for(let i=countries.length;i>countries.length-3;i--){
        sample.push(countries[i])
    }return sample
}

//Q.7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


// Exercise Level 3 
// Q.1 Use the countries information, in the data folder. Sort countries by name, by capital, by population

let countriesexercise3 =[
    {country: 'English',count:91},
    {country: 'French',count:45},
    {country: 'Arabic',count:25},
    {country: 'Spanish',count:24},
    {country:'Russian',count:9},
    {country:'Portuguese', count:9},
    {country:'Dutch',count:8},
    {country:'German',count:7},
    {country:'Chinese',count:5},
    {country:'Swahili',count:4}
    ]

countriesexercise3.sort( function(a,b) { //sorting by name 
    if(a.country>b.country)return 1
    if(a.country<b.country)return -1
})
console.log(countriesexercise3)

countriesexercise3.sort(function(a,b){ //sorting by count
    if(a.count>b.count)return 1
    if(b.count>a.count)return -1
})
console.log(countriesexercise3)

// Q.2 Find the 10 most spoken languages
// first we will sort the array of objects in descending order then return the required number of languages


function mostSpokenLanguages(countries,number){
    let required=[]
    countries.sort(function(a,b){
        if(a.count>b.count)return -1
        if(a.count<b.count)return 1
    })

    for(let i=0;i<number;i++){
        required.push(countries[i])
    }
    return required
}

console.log(mostSpokenLanguages(countriesexercise3,4))

//Q.3 Use countries_data.js file create a function which create the ten most populated countries
let countrieswithpupulations=[
    {country: 'China', population: 1377422166},
    {country: 'India', population: 1295210000},
    {country: 'United States of America', population: 323947000},
    {country: 'Indonesia', population: 258705000},
    {country: 'Brazil', population: 206135893},
    {country: 'Pakistan', population: 194125062},
    {country: 'Nigeria', population: 186988000},
    {country: 'Bangladesh', population: 161006790},
    {country: 'Russian Federation', population: 146599183},
    {country: 'Japan', population: 126960000}
    ]

    countrieswithpupulations.reverse()
    console.log(countrieswithpupulations)
    function mostPopulatedCountries(countries,number){
        let required=[]
        countries.sort(function (a,b){
            if(a.population>b.population)return 1
            if(a.population<b.population)return -1
        })
        for(let i=0;i<number;i++){
            required.push(countries[i])
        }
        return required
    }

    console.log(mostPopulatedCountries(countrieswithpupulations,5))

    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) 