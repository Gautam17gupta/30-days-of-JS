//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = 15;
if(age>=18){
    console.log('You are old enough to drive.')
}else{
    console.log('you are left with '+18-age+' years to drive')
}

// question 2 {a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways}
 let a = 12
 let b = 34

 let check=a>b
 check                                    // using ternery operator
    ?console.log(a+' is greater than '+b)
    :console.log(b+' is greater than '+a)

if(a>b){                                 // using if else
    console.log(a+' is greater than '+b)
} else{
    console.log(b+' is grater than '+a)
}   
 
//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = 14
if(number%2==0){
    console.log('it is divisible by 2')
}else{
    console.log('it is not divisible by 2')
}

// Write a code which can give grades to students according to theirs scores:

let grade = 82
if(grade>=80 && grade<=100){
    console.log('A grade')
}else if (grade>=70 && grade<=89){
    console.log('b grade')
}else if (grade>=60 && grade<=69){
    console.log('c grade')
}else if(grade>=50 && grade<=59){
    console.log('d grade')
}else if (grade>=0 && grade<=49){
    console.log('f grade')
}

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

let enteredMonth= 'April'
if(enteredMonth=='September' || enteredMonth=='October' || enteredMonth=='November'){
    console.log('Autumn')
}else if (enteredMonth=='December' || enteredMonth=='January' || enteredMonth=='February'){
    console.log('Winter')
}else if (enteredMonth=='March' || enteredMonth=='April' || enteredMonth=='May'){
    console.log('Spring')
}else if (enteredMonth=='June' || enteredMonth=='July' || enteredMonth=='August'){
    console.log('Summer')
}

//Check if a day is weekend day or a working day. Your script will take day as an input.

let today='FRIday'
today=today.toLowerCase();
if(today=='saturday' || today=='sunday'){
    console.log(today+' is a weekoff')
}else {
    console.log(today+' is a working day')
}

// Write a program which tells the number of days in a month.
 let inputMonth='JANUary'
 inputMonth=inputMonth.toLowerCase();
 if(inputMonth=='january' || inputMonth=='march' || inputMonth=='may' || inputMonth=='july' ||inputMonth=='august' ||inputMonth=='october'||inputMonth=='december'){
    console.log(inputMonth+' has 31 days')
 }else if(inputMonth=='february'){
    console.log(inputMonth+'has 28 days')
 }else{
    console.log(inputMonth+'has 30 days')
 }
