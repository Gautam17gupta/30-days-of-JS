
let obj ={
    first:1,
    second:2,
    third:3,
    fourth:4,
    fifth:5,
    sixth:6,
}
let {first:pehla,doosra,teesra,fourth:choutha,paanchva,chata,saatva=7}=obj
console.log(choutha,saatva)
console.log(obj.saatva)

let obj2={number:[1,2,3,4,5],other:[6,7,8,9]}
let num=obj2.number
console.log(num)
let numformatted = num.slice(0,-1).join(', ')
console.log(numformatted)
console.log(num[num.length-1])

// Exercise LEVEL 1


const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// Q>1 Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e,pi,gravity,humanBodyTemp,waterBoilingTemp]=constants
console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp)

// Q.2 Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin,est,sw,den,nor]=countries
console.log(fin,est,sw,den,nor)

//Q.3 Destructure the rectangle object by its properties or keys.
let {width,height,area,perimeter} =rectangle
console.log(width,height,area,perimeter)

// EXERCISE LEVEL - 2
//
//Q.1 Iterate through the users array and get all the keys of the object using destructuring

for(const {name,scores,skills,age} of users){
    console.log(name , scores, skills,age)
}

//Q.2 Find the persons who have less than two skills
let personWithLessSkills=[]
for(const {name ,scores ,skills ,age} of users){
    if(skills.length<2){
        personWithLessSkills.push(name)
    }
}console.log('person with less than two skills are ',personWithLessSkills)

//Exercises: Level 3
// Q.1 Destructure the countries object print name, capital, population and languages of all countries
// object not found
//Q.2 A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [Name,skills,[,,jsScore,reactScore]]=student
console.log(Name, skills, jsScore, reactScore)

// Q.3 Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

let convertArrayToObject = (students)=>{
    let requiredarr=[]
    for(let student of students){
       let obj={}
       let [Name,skills,Scores] =student
          obj.name=Name
          obj.skills=skills
          obj.scores=Scores
          requiredarr.push(obj)
    }
     return requiredarr
}

console.log(convertArrayToObject(students))

//Q.4 Copy the student object to newStudent without mutating the original object. In the new object add the following ?

const student4 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const newStudent={...student4}
console.log(newStudent)


// * Add Bootstrap with level 8 to the front end skill sets
newStudent.skills.frontEnd.push({skills:'Bootstrap',level:8}) 
// * Add Express with level 9 to the back end skill sets
newStudent.skills.backEnd.push({skills:'Express',level:9})
// * Add SQL with level 8 to the data base skill sets
newStudent.skills.dataBase.push({skills:'SQL',level:8})
// * Add SQL without level to the data science skill sets
newStudent.skills.dataScience.push('SQL')
console.log(newStudent)
