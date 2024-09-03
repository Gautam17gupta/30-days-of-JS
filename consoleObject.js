console.error('hwfowgewbg')
let obj={
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  }
let arr=[1,2,3,4,5,6,7,8,9,12,3,535,67,789]
console.table(arr)
console.log(arr)
console.table(obj)
console.group(arr)
console.group(obj)
console.groupEnd()
console.log(obj)

// EXERCISE LEVEL 1
// q.1 Display the countries array as a table
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
console.table(countries)
//Q.2 Display the countries object as a table
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
console.table(countrieswithpupulations)

//Use console.group() to group logs
// well this command can be used in browser only 

//Exercise LEVEL 2
//Q.1 10 > 2 * 10 use console.assert()
console.assert((10>2*10),'the assertion is false')
//Q.2 Write a warning message using console.warn()
console.warn('sample warning test')
//Q.3 Write an error message using console.error()
console.error('sample error msg')

//EXERCISE LEVEL 3
//Q.1 Check the speed difference among the following loops: while, for, for of, forEach
console.time('regular while loop')
let i=0
while(i<countries.length){
    countries[i] 
    i++
}console.timeEnd('regular while loop')

console.time('regular FOR loop')
for(i=0;i<countries.length;i++){
    console.log(countries[i])
}console.timeEnd('regular FOR loop')

console.time('regular for of loop')
for(country of countries){
    console.log(i)
}console.timeEnd('regular for of loop')

console.time('regular ForEach loop')
countries.forEach(i=> console.log(i))
console.timeEnd('regular ForEach loop')

