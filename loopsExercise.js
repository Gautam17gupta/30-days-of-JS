const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//Q.1 Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i=1;i<=10;i++){
    console.log(i)
}
 
let i=1;
while(i<=10){
    console.log(i)
    i++
}

i=0
do{
    console.log(i)
    i++
}while(i<=10)

//Q .2  Iterate 10 to 0 using for loop, do the same using while and do while loop    
let samplearray=[]
for(let i=10;i>=1;i--){
    samplearray.push(i)
}
console.log(samplearray)

i=10
samplearray=[]
while(i>=0){
    samplearray.push(i)
    i--
}console.log(samplearray)

samplearray=[]
i=10
do{
    samplearray.push(i)
    i--
}while(i>=0)
console.log(samplearray)

//Write a loop that makes the following pattern using console.log():
let star=''
for(let i=1;i<7;i++){
    star=''
    for(let j=0;j<i;j++){
        star+='# '
    }console.log(star)
}

//q.5 Use loop to print the following pattern:
for(let i=0;i<=10;i++){
    console.log(`${i}*${i}=${i*i}`)
}

// Q.6 Using loop print the following pattern
console.log('i  ','i^2 ','i^3 ')
for(let i=0;i<=10;i++){
    console.log(`${i}   ${i*i}    ${i*i*i}`)
}

// Q.7 Use for loop to iterate from 0 to 100 and print only even numbers
samplearray=[]
for(let i=1;i<=100;i++){
    if(i%2==0){
        samplearray.push(i)
    }
}console.log('Even numbers are : ',samplearray)

// Q.8 Use for loop to iterate from 0 to 100 and print only odd numbers
samplearray=[]
for(let i=1;i<=100;i++){
    if(i%2!=0){
        samplearray.push(i)
    }
}console.log('Odd numbers are : ',samplearray)

//Q.9 Use for loop to iterate from 0 to 100 and print only prime numbers
samplearray=[2]
for(let i=3;i<=100;i++){
    let flag=true
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=false
        }
    }if(flag==true){
        samplearray.push(i)
    }
}console.log('prime numbers are :',samplearray)

// Q.10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum=0
for(let i=0;i<=100;i++){
    sum+=i
}console.log('sum of first 100 numbers is ',sum)

//Q.11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumeven=0
for(let i=1;i<=100;i++){
    if(i%2==0){
       sumeven+=i
    }
}console.log('sum of Even numbers are:- ',sumeven)

let sumodd=0
for(let i=1;i<=100;i++){
    if(i%2!=0){
        sumodd+=i
    }
}console.log('sum of odd numbers are:- ',sumodd)

//Q.12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
 samplearray=[sumeven,sumodd]
 console.log(samplearray)

//Q.13 Develop a small script which generate array of 5 random numbers
samplearray=[]
for(let i=0;i<5;i++){
    samplearray.push(Math.floor(Math.random()*100))
}
console.log(samplearray)

//Q.14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
samplearray=[]
let num=0
for(let i=0;i<5;i++){
    num=Math.floor(Math.random()*100)
    if(!samplearray.includes(num)){
        samplearray.push(num)
    }    
}
console.log(samplearray)

// Q.15 Develop a small script which generate a six characters random id:
let chars='abcdefghijklmnopqrstuvwxyz1234567890'
let sixCharacterScript=''
for(let i=0;i<6;i++){
    sixCharacterScript+=chars.charAt(Math.floor(Math.random()*chars.length))
}
console.log(sixCharacterScript)

// Exercises Level 2
// Develop a small script which generate any number of characters random id:

let scriptsize=Math.floor(Math.random()*chars.length)
sixCharacterScript=''
for(let i=0;i<scriptsize;i++){
    sixCharacterScript+=chars.charAt(Math.floor(Math.random()*chars.length))
}console.log(sixCharacterScript)

// Q.2 Write a script which generates a random hexadecimal number.

let hexscript='1234567890ABCDEF'
let desiredScript='#'
for(let i=0;i<Math.floor(Math.random()*10);i++){
    desiredScript+=hexscript.charAt(Math.floor(Math.random()*16))
}console.log('Random Hexadecimal Script is : ',desiredScript)

//Q.3 Write a script which generates a random rgb color number.

var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
console.log(RGBColor);

//Q.4 Using the above countries array, create the following new array.

let newcountries=[]
for(let i=0;i<countries.length;i++){
    newcountries.push(countries[i].toUpperCase())
}console.log('updated array : ',newcountries)

//Q.5 Using the above countries array, create an array for countries length'.

let countrieslength=[]
for(let i=0;i<countries.length;i++){
    countrieslength.push(countries[i].length)
}console.log('countries length array',countrieslength)

//Q.6 Use the countries array to create the following array of arrays:

let arrayofarrays=[]
for(let i=0;i<countries.length;i++){
    let abc=[]
    abc.push(countries[i])
    abc.push(newcountries[i].slice(0,3))
    abc.push(countrieslength[i])
    arrayofarrays.push(abc)
}console.log(arrayofarrays)

//Q.7 In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let LANDcountries=[]
for(let i=0;i<countries.length;i++){
    if(countries[i].includes('land')){
        LANDcountries.push(countries[i])
    }
}console.log('countries with land ',LANDcountries)

//Q.8 In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countriesEndWithIA=[]
for(let i=0;i<countries.length;i++){
    if(countries[i].includes('ia')){
        countriesEndWithIA.push(countries[i])
    }
}console.log(countriesEndWithIA)

//Q.9 Using the above countries array, find the country containing the biggest number of characters.
let biggestcharactercountry=''
for(let i=0;i<countries.length;i++){
    if(biggestcharactercountry.length<countries[i].length){
        biggestcharactercountry=countries[i]
    }
}console.log(biggestcharactercountry)

//Q.10 Using the above countries array, find the country containing only 5 characters.

let countryWithFiveChar=[]
for(let i=0;i<countries.length;i++){
    if(countries[i].length==5){
        countryWithFiveChar.push(countries[i])
    }
}console.log('country with five characters ',countryWithFiveChar)

//Q.11 Find the longest word in the webTechs array

let LongestWebTech=''
for(let i=0;i<webTechs.length;i++){
    if(LongestWebTech.length<webTechs[i].length){
        LongestWebTech=webTechs[i]
    }
}console.log('longest web tech word is ',LongestWebTech)

//Q.12 Use the webTechs array to create the following array of arrays:

let arrayofwebtecharray=[]
for(let i=0;i<webTechs.length;i++){
    let bc=[]
    bc.push(webTechs[i].toUpperCase())
    bc.push(webTechs[i].length)
    arrayofarrays.push(bc)
}console.log(arrayofarrays)

//Q.13 Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

for(let i=0;i<webTechs.length;i++){
    console.log(webTechs[i])
}

for( const cde in webTechs){
    console.log(webTechs[cde])
}
 //Q.15 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
 let fruitarray=['banana', 'orange', 'mango', 'lemon']
 let reversedfruits=[]
 for(let i=fruitarray.length;i>=0;i--){
    reversedfruits.push(fruitarray[i])
 }console.log(reversedfruits)

 //Q.16 Print all the elements of array as shown below.
 const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']]
 for(let i=0;i<fullStack.length;i++){
    for(let j=0;j<fullStack[i].length;j++){
        console.log(fullStack[i][j].toUpperCase())
    }
 }

 // Level 3 Exercises 

 // Q.1 Copy countries array(Avoid mutation)
 let copycountries=countries
 console.log(copycountries)

 //Q.2 Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
 copycountries.sort()
 let sortedcountries=copycountries
 console.log(sortedcountries)

 //Q.3 Sort the webTechs array and mernStack array
 console.log(webTechs.sort())
 console.log(fullStack.sort())

 //Q.4 Extract all the countries contain the word 'land' from the countries array and print it as array
 // done already

 //Q.5 Find the country containing the hightest number of characters in the countries array
 //done alreDY

 //Q.6 Extract all the countries contain the word 'land' from the countries array and print it as array
 // already done

 //Q.7 Extract all the countries containing only four characters from the countries array and print it as array
 // done a similar question with length 5

 //Q.8 Extract all the countries containing two or more words from the countries array and print it as array
 // already done
 
 //Q.9 Reverse the countries array and capitalize each country and stored it as an array

 let reversedcountries=[]
 for(let i=countries.length-1;i>=0;i--){
    reversedcountries.push(countries[i].toUpperCase())
 }console.log(reversedcountries)

