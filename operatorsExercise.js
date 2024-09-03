// exercise level 1
//Q.1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstname = 'Gautam'            //string
let lastname = 'Gupta'              //string
let country = 'India'               //string
let city='Panchkula'                //string
let age=23                          //number
let ismarried= true                 //boolean
console.log(typeof(firstname))
console.log(typeof(lastname))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(ismarried))
// Q.2 Check if type of '10' is equal to 10
console.log(10==='10')              //false
// Q.3 Check if parseInt('9.8') is equal to 10
console.log(parseInt(9.8)==10)      //false
console.log('question 5 answers ')
//Q.5 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3)                  //true
console.log(4 >= 3)                 //true
console.log(4 < 3)                  //false
console.log(4 <= 3)                 //false
console.log(4 == 4)                 //true
console.log(4 === 4)                //true
console.log(4 != 4)                 //false
console.log(4 !== 4)                //false
console.log(4 != '4')               //false
console.log(4 == '4')               //true
console.log(4 === '4')              //false
console.log('python'.length=='jargon'.length) //true

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12)       //true
console.log(4 > 3 && 10 > 12)       //false
console.log(4 > 3 || 10 < 12)       //true
console.log(4 > 3 || 10 > 12)       //true
console.log(!(4 > 3))               //false
console.log(!(4 < 3))               //true
console.log(!(false))               //true
console.log((4 > 3 && 10 < 12))     //true
console.log(!(4 > 3 && 10 > 12))    //true
console.log(!(4 === '4'))           //true
console.log(!('dragon'.includes('on')) && !('python'.includes('on')))  //false
// exercise level 2 is all about prompt which doesnot work in terminal so practiced it on browser console window
// exercise level 3 
// question 1 ;- 
//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const date = new Date();
const minutes = date.getDay().toString().padStart(2, '0');
const dat= date.getDate().toString().padStart(2,'0')
const month=date.getMonth().toString().padStart(2,'0')
const year=date.getFullYear()
const hours=date.getHours().toString().padStart(2,'0')


console.log(`${year}-${month}-${dat}  ${hours}:${minutes}`);