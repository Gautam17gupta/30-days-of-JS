const A = [4, 5, 8, 9]
const B = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// LEVEL-1 EXERCISES
// Q.1 create an empty set
let emptyset=new Set()
console.log(emptyset)

//Q.2 Create a set containing 0 to 10 using loop
for(let i=0;i<=10;i++){
    emptyset.add(i)
}
console.log('putting numbers 0 to 10',emptyset)

//Q.3 Remove an element from a set
emptyset.delete(0)
console.log(emptyset)

//Q.4 Clear a set
emptyset.clear()
console.log(emptyset)

//Q.5 Create a set of 5 string elements from array
let array=['abc','bcd','cde','def','efg']
let setOfStrings=new Set(array)
console.log(setOfStrings)

//Q.6 Create a map of countries and number of characters of a country
let mapOfCountries= new Map()
countries.forEach((country=> mapOfCountries.set(country,country.length)))
console.log(mapOfCountries)

//EXERCISES LEVEL 2
// Q.1 Find a union b
let c=[...A, ...B]
let AUnionB=new Set(c)
console.log('a=> ',A)
console.log('b=> ',B)
console.log('a union b => ',c)

//Q.2 find a intersection b
let Be=new Set(B)
c=A.filter((num=> Be.has(num)))
let C=new Set(c)
console.log('A intersection C : ',C)

// Q.3 find a without b

c=A.filter((num)=> !Be.has(num))
let awithoutb=new Set(c)
console.log('A-B is :',awithoutb)

// EXERCISE LEVEL 3
//Q.1 How many languages are there in the countries object file.
countriesarrOFobb =[
    { English: 91 },
    { French: 45 },
    { Arabic: 25 },
    { Spanish: 24 },
    { Russian: 9 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
  ]
let countriesSet=new Set(countriesarrOFobb)
console.log('NO. of countries ',countriesSet.size)

// Q.2 Use the countries data to find the n most spoken languages:
// same question has been done in previous exercises 
