//Q.1 Declare a function fullName and it print out your full name.
function fullnamefun (){
    console.log('Gautam Gupta')
}
fullnamefun();

//Q.2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullnamefunparam(first,second){
    let name =first+' '+second
    console.log(name)
}
fullnamefunparam('GAUTAM','GUPTA')

//Q.3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(one,two){
    console.log(one+two)
}
addNumbers(23,'s')

//Q.4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,breadth){
    console.log(length*breadth)
}
areaOfRectangle(25,25)

//Q.5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,breadth){
    console.log('perimeter of rectangle :',2*(length+breadth))
}
perimeterOfRectangle(12,10)

//Q.6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,width,breadth){
    console.log('volume of a regular prism is ',length*width+breadth)
}
volumeOfRectPrism(10,10,10)

//Q.7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius){
    console.log('area of circle : ',Math.PI*radius*radius)
}
areaOfCircle(17)

//Q.8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumference(radius){
    console.log('the circumference of circle is ',Math.PI*2*radius)
}
circumference(7)

// Q.9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass,volume){
    console.log('density is mass per unit volume ',mass/volume)
}
density(400,400)

//Q.10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed (distance, time){
    console.log('speed is disctance covered perunit time ',distance/time)
}
speed(100,20)
//Q.11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass,gravity){
    console.log('the weight is ',mass*gravity)
}
weight(6,10)

//Q.12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius){
    console.log(celsius,'c is equal to ',(celsius *9/5)+32,' fehrenheit')
}
convertCelsiusToFahrenheit(47)

//Q.13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
 function BMI(weight,height){
    const bmi=weight/(height*height)

    if(bmi<18.5){
        console.log('underweight')
    }else if (bmi>=18.5 || bmi<=24.9){
        console.log('normal weight ')
    }else if (bmi>=25 || bmi<=29.9){
        console.log('normal weight ')
    }else{
        console.log('Obese')
    }
 }

 BMI(60,1.65)

//Q.14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month){
    if(month=='September' || month=='October' || month=='November'){
        console.log('Autumn')
    }else if (month=='December' || month=='January' || month=='February'){
        console.log('Winter')
    }else if (month=='March' || month=='April' || month=='May'){
        console.log('Spring')
    }else if (month=='June' || month=='July' || month=='August'){
        console.log('Summer')
    }
}
checkSeason('July')

//Q.15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function max(a,b,c){
    if(a>b){
        if(a>c){
            console.log(a,' is the maximum')
        }else{
            console.log(c," is the maximum")
        }
    }else{
        if(b>c){
            console.log(b,' is the maximum')
        }else{
            console.log(c ,' is the maximum')
        }
    }
}
max(23,17,20)

// Level 2 Exercise 
// Q.1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a,b,c){
    console.log(a,'x2+',b,'x+',c)
}
solveLinEquation(12,45,3)

//Q.2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a,b,c){
    let B= b*b-4*a*c
    B=Math.sqrt(B)
    let firstRoot=(2*b + B)/2*a
    let secondRoot=(2*b - B)/2*a
    return(firstRoot,secondRoot)
}

console.log('solution of quad eq is ',solveQuadEquation(1,4,4))

//Q.3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let sampleArr=[1,2,3,4,5,6,7,8,9,10]
function printArray(arr){
    for(const value of arr){
        console.log(arr[value-1])
    }
}
printArray(sampleArr)

//Q.4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(){
    const date = new Date();
const minutes = date.getDay().toString().padStart(2, '0');
const dat= date.getDate().toString().padStart(2,'0')
const month=date.getMonth().toString().padStart(2,'0')
const year=date.getFullYear()
const hours=date.getHours().toString().padStart(2,'0')
console.log(`${year}-${month}-${dat}  ${hours}:${minutes}`);
}

showDateTime()

//Q.5 Declare a function name swapValues. This function swaps value of x to y.
function swapValues(a,b){
    let temp =b
    b=a
    a=temp
    return[a,b]
}
console.log(swapValues(12,13))

//Q.6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr){
    let reverseArray=[]
    for(const value in arr){
        reverseArray[value-1]=arr[arr.length-value]
    }
    return reverseArray
}
console.log(reverseArray(sampleArr))

//Q.7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].toUpperCase()
    }
    return arr
}
let subjects=['maths','english','chemistry','biology','physics']
console.log(capitalizeArray(subjects))

//Q.8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr,item){
    arr.push(item)
    return arr
}
addItem(subjects,'Sports')
console.log(subjects)

//Q.9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr,index){
    arr.splice(index,1)
    return arr
}
removeItem(subjects,0)
console.log(subjects)

//Q.10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(start,end){
    let sum=0
    do{sum+=start++}while(start<=end)
        return sum
}
console.log(sumOfNumbers(0,10))


