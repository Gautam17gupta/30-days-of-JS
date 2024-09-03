//level 1 exercises
//q.1 Declare an empty array;
let sampleArr=[]
// q.2 Declare an array with more than 5 number of elements
sampleArr=[1,2,3,4,5,6]
// q.3 Find the length of your array
console.log(sampleArr.length)
//q.4 Get the first item, the middle item and the last item of the array
console.log(sampleArr[0])                    //first element
console.log(sampleArr[sampleArr.length-1])   //last elemnt
console.log(sampleArr[sampleArr.length/2])   //middle element
//q.5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
sampleArr=[17,'hello',true,NaN,['apple','banana','melon']]
console.log(sampleArr.length)
//q.6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itcompanies =['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
//q.7 Print the array using console.log()
console.log(itcompanies)
//q.8 Print the number of companies in the array
console.log(itcompanies.length)
//q.9 Print the first company, middle and last company
console.log(itcompanies[0])                 //firstcomapany
console.log(itcompanies.length/2 +1)        //middlecompany
console.log(itcompanies[itcompanies.length-1])//lastelement
//q.10 Print out each company
console.log(itcompanies.toString())
//q.11 Change each company name to uppercase one by one and print them out
console.log(itcompanies.toString().toUpperCase())
//q.12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itcompanies.toString()+" are big IT companies")
//q.13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let checkCompany=itcompanies.includes('adobe')
if(checkCompany){
    console.log('yes ')
}else{
    console.log('company not found')
}
// Q.14 Filter out companies which have more than one 'o' without the filter method
// Q.15 Sort the array using sort() method
sampleArr=[2,32,12,34,33,56,76,89,90,76,54,87,12]
sampleArr.sort()
console.log(sampleArr)

// Q.16 Reverse the array using reverse() method
sampleArr.reverse()
console.log(sampleArr)

//Q.17 slice out the first 3 companies from the array

console.log(itcompanies.slice(0,3))

// Q. 18 Slice out the last 3 companies from the array
console.log('last three companies in the array '+itcompanies.slice(itcompanies.length-3,itcompanies.length))

// Q.19 Slice out the middle IT company or companies from the array
if(itcompanies.length%2==0){
    console.log('middle companies are '+itcompanies.slice(itcompanies.length/2,(itcompanies.length/2)+2))
}else{
    console.log('middle company is '+itcompanies.slice((itcompanies.length/2)+1,(itcompanies.length/2)+2))
}

// Q.20 Remove the first IT company from the array

console.log('first company is '+itcompanies.shift())

//Q.21 Remove the middle IT company or companies from the array

itcompanies.unshift('facebook')

if(itcompanies.length%2==0){
    itcompanies.splice(itcompanies.length/2,2)
    console.log('companies after removing the middle element '+itcompanies)
}else{
    itcompanies.splice(itcompanies.length/2,1)
    console.log('companies after removing the middle element '+itcompanies)
}

//q.22 Remove the last IT company from the array
 
console.log('before removing '+itcompanies)
itcompanies.pop()
console.log('after removing '+itcompanies)

//Q.23 Remove all IT companies
itcompanies.splice(0,itcompanies.length)
console.log('empty array of it companies '+itcompanies)

// exercise LEVEL 2 
// Q.1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
const  abc  = require( "./contries.js")
console.log('List od countries ',abc.countries)
console.log('list of webtechs ',abc.webTechs)

// Q.2 First remove all the punctuations and change the string to array and count the number of words in the array

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words =text.replace(/[^\w\s\']|_/g, "")
words=words.split(' ')
console.log(words)
console.log(words.length)

// Q.3 In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.push('biscuit')
shoppingCart.splice(2,1,'green tea')
console.log(shoppingCart)
shoppingCart.shift()
console.log(shoppingCart)

//Q.4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list

if(abc.countries.includes('ethopia')){
    console.log('present')
}else{
    abc.countries.push('ethopia')
    console.log(abc.countries)
}

// Q.5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(abc.webTechs.includes('sass')){
    console.log('Sass is a CSS preprocess')
}else{
    abc.webTechs.unshift('Sass')
    console.log(abc.webTechs)
}

// Q.6 Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack= frontEnd.concat(backEnd)
console.log(fullStack)

// EXERCISE LEVEL 3
// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log('min age is : ',ages[0])
console.log('max age is : ',ages[ages.length-1])
console.log(ages)
// finding median ages
if(ages.length%2==0){
    console.log('median elements are : ',ages.slice((ages.length/2)-1,(ages.length/2)+1))
}else{
    console.log('median is ',ages[ages.length/2])
}

// Find the average age(all items divided by number of items)
let sum=0
for(let i=0;i<ages.length;i++){
    sum+=ages[i]
}

let average=(sum/ages.length).toExponential()
console.log('the average is ',average)

// range of the array 
console.log('the range is : ',ages[ages.length-1]-ages[0])

//Compare the value of (min - average) and (max - average), use abs() method 
average=Math.abs(average)
console.log('comparison of min and average ',Math.abs(ages[0]-average))
console.log('comparison of max and average ',Math.abs(ages[ages.length-1]-average))

 //Q.3 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
 let countryOne
 let countryTwo
  if((ages.length%2)==0){
    countryOne=ages.slice(0,(ages.length%2))
    countryTwo=ages.slice((ages.length%2),ages.length)
  }else{
    countryOne=ages.slice(0,(ages.length%2)+1)
    countryTwo=ages.slice((ages.length%2)+1,ages.length)
  }

  console.log(countryOne)
  console.log(countryTwo)




