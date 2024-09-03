
// Exercise LEVEL 1
//Q.1 Create an Animal class. The class will have name, age, color, legs properties and create different methods
class animal{
    constructor(name,age,colour,legs){
        this.name=name
        this.age=age
        this.colour=colour
        this.legs=legs
    }
    get getage(){
        console.log('its age is '+this.age)
    }
}
let suvar=new animal('pinku',12,'black',3)
suvar.getage

// Q.2 Create a Dog and Cat child class from the Animal Class.

class dog extends animal{
    get getsound(){
        console.log('bhow-bhow')
    }
}

class cat extends animal{
    get getsound(){
        console.log('meow-meow')
    }
}

let dog1=new dog('uno',13,'brown',4)
dog1.getage
dog1.getsound
let cat1=new cat('billu',2,'orange',4)
cat1.getage
cat1.getsound

// EXERCISE LEVEL 2
//Q.1 Override the method you create in Animal class

class kangaroo extends animal{
    constructor(name,age,colour,legs,walkingStyle){
        super(name,age,colour,legs)
        this.walkingStyle=walkingStyle
    }
}

let kangaroo1=new kangaroo('gunnu',20,'fair',2,'hopping')
console.log(`kangaroos name is ${kangaroo1.name}, its age is ${kangaroo1.age} and it walks by ${kangaroo1.walkingStyle}`)

// EXERCISE LEVEL 3
// Q.1  Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
class statistics{
    constructor(arr){
        this.arr=arr
    }
    get count(){
        return this.arr.length-1
    }
    get sum(){
        let sum=0
        for(let i=0;i<this.arr.length;i++){
            sum+=this.arr[i]
        }return sum
    }
    static get Min(){
        console.log('checking ',this.arr)
        return Math.min(...this.arr)
        
    }
     get Max(){
        return Math.max(...this.arr)
    }
    get Range(){
        return (this.arr.Max-this.arr.Min)
    }
    get Mean(){
        return this.arr.sum/this.arr.count
    }
    get Median(){
        this.arr.sort(function(a,b) {return (a-b)})
            return this.arr[this.arr.length/2]
    }
    get Variance(){
        let variancesum = this.arr.reduce((acc,current)=> {
            acc+=(current-this.Mean)*(current-this.Mean)
        },0)
        return variancesum
    }
    get StandardDeviation(){
        let sd=Math.sqrt(this.Variance)
        return sd
    }
     describe(){
        let obj={}
        obj.count=this.count
        obj.sum=this.sum
        obj.min=this.Min
        obj.max=this.Max
        obj.range=this.Range
        obj.mean=this.Mean
        obj.median=this.Median
        obj.variance=this.Variance
        obj.standarddeviation=this.StandardDeviation
        return obj
    }
}
console.log(statistics.Min)
let samplearray= new statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
console.log(samplearray.describe())
console.log(samplearray.Min)