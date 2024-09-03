//Exercises: Level 1
//Create an empty object called dog
let dog={}

//q.2 Print the the dog object on the console
console.log(dog)

//Q.3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.Name='Uno'
dog.legs='Four'
dog.color='golden-black'
dog.age=3
dog.bark=function(){
    return "woof - woof"
}

//Q.4 Get name, legs, color, age and bark value from the dog object
console.log(dog.Name)
console.log(dog.legs)
console.log(dog.color)
console.log('dog\'s age ',dog.age)
console.log('dog bark ',dog.bark())

//Q.5 Set new properties the dog object: breed, getDogInfo
dog.breed='Dashchund'
dog.getDogInfo=function(){
    return (`dogs name is ${this.Name} \nIt has ${this.legs} legs \nIts colour is ${dog.color}\nIts age is ${this.age}\nAnd it barks ${this.bark()}`)
}
console.log(dog.getDogInfo())

//Exercise Level 2 
//Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  // Q.1 Find the person who has many skills in the users object.
let maxlength=0
let userwithMaxskills
for(const user in users ) {
    
    console.log(users[user].skills.length)
    if(users[user].skills.length>maxlength){
        maxlength=users[user].skills.length
        userwithMaxskills=user
    }
}
console.log(userwithMaxskills)

//Q.2 Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedin=0
let userswithmorepoints=0
for(const user in users){
    if(users[user].isLoggedIn==true){
        ++loggedin
    }if(users[user].points>=50){
        ++userswithmorepoints
    }
}
console.log('no. of users logged in are: ',loggedin)
console.log('no. of users withmore than 50 points are: ',userswithmorepoints)

//Q.3 Find people who are MERN stack developer from the users object
let mernstackdeveloper=[]
let tempskills=[]
for(const user in users){
    tempskills=users[user].skills
    if(users[user].skills.length>3){
        if(tempskills.includes('MongoDB') && tempskills.includes('Express') && tempskills.includes('React') && tempskills.includes('Node')){
            mernstackdeveloper.push(user)
        }
    }
}console.log(mernstackdeveloper)

//Q.4 Set your name in the users object without modifying the original users object
users.Gautam={
    email:'gautam.gupta@cropsly.com',
    skills:['java','DSA','HTML','CSS'],
    age:23,
    isLoggedIn:'true',
    points:50
}
console.log(users)

//Q.5 Get all keys or properties of users object
let keysOfusers=Object.keys(users)
console.log(keysOfusers)

//Q.6 Get all the values of users object
let valuesOfUsersObject=Object.values(users)
console.log(valuesOfUsersObject)

//Q.7 Use the countries object to print a country name, capital, populations and languages.
// similar to already done questions

// Level 3 questions 
// Q.1 Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAcoount={
    firstname:'Gautam',
    lastName:'Gupta',    
    incomes:[12000,13000,14000,15000],
    expenses:[13000,8000,7000],
    totalincome:function(){
        let sum=0
        for(const value in this.incomes){
            sum+=this.incomes[value]
        }
        return sum
    },
    totalExpense:function(){
        let sum=0
        for(const value in this.expenses){
            sum+=this.expenses[value]
        }
        return sum
    },

    addincome:function(number){
        this.incomes.push(number)
    },

    addexpense:function(number){
        this.expenses.push(number)
    },
    accountBalance:function(){
        return (this.totalincome()-this.totalExpense())
    }
}
console.log(personAcoount.totalincome())
console.log(personAcoount.totalExpense())
console.log(personAcoount.accountBalance())

// next question requires two arrays which are :-
const usersArray = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//Q.2 Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
//b. Create a function called signIn which allows user to sign in to the application

function signup(id,Username,Email,Password,CreatedAt,IsLoggedIn){
    for(const users of usersArray){
        if(users._id==id){
            console.log('user already exists')
            return
        }
    }
    usersArray.push({
        _id:id,
        username:Username,
        email:Email,
        password:Password,
        createdAt:CreatedAt,
        isLoggedIn:IsLoggedIn
    })
}

// Second part of question 

function signIn(Username,Password){
    let flag=false
    for(const user of usersArray){
        if(user.username==Username || user.password==Password){
            flag=true
        }
    }
    if(flag!=true){
        console.log('password or username is incorrect')
    }
}

//Q.3 The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

function rateProduct(ProductId,UserId,Rating){
    for(const product of products){
        if(product._id==ProductId){
            products[product].ratings.push({
                userId:UserId,
                rate:Rating
            })
        }
    }
}

function averageRating(ProductId){
    let avg=0
    for(const product of products){
        if(product._id==ProductId){
            let sumofrating=0;
            let noofrating=product.ratings.length;
            for(const rating of product.ratings){
                sumofrating+=rating.rate;
            }
            avg=sumofrating/noofrating
        }
    }
    return avg
}

console.log(averageRating('hedfcg'))

// Q.4 Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(ProductId,UserId){
    for(const product of products){
        if(product._id==ProductId){
            if(product.likes.includes(UserId)){
                product.likes.pop()
                return
            }else{
                product.likes.push(UserId)
            }
        }
    }
} 

console.log(products)
likeProduct('hedfcg','fg12cy')
console.log(products)


console.log(dog)