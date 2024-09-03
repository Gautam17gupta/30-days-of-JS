// EXERCISE LEVEL 1
// Create a closure which has one inner function

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const fuctionchec=outerFunction()
console.log(fuctionchec())

// EXERCISE LEVEL 2
// Create a closure which has three inner functions
function outerFunction2() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function table(){
        let arr=[]
        for(let i=1;i<=10;i++){
            arr.push(count*i)
        }
        return arr
    }

   let obj= {}
   obj.plusOne=plusOne()
   obj.minusOne=minusOne()
   obj.table=table()
    return obj
}
const innerFuncs = outerFunction()

console.table(innerFuncs())
//console.log(innerFuncs.minusOne)
//console.log(innerFuncs.table)