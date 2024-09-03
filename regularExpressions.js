let clg='Cgc is a great college to be a part of '
truth=clg.replace(/great/,'worst')
console.log(truth)
let pattern=/cgc/gi
console.log(pattern.flags)
console.log(pattern.test(clg))
console.log(clg.match(pattern))
console.log(clg.search(pattern))

// EXERCISE LEVEL 1
// Q.1 Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let txt='He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
pattern=/\d+/g
let money=txt.match(pattern)
let totalIncome=money.reduce((acc,current)=> acc+=Number(current),0)
console.log(totalIncome)

//Q.2 The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

points = ['-12', '-4', '-3', '-1', '0', '4', '8']
let sortedPoints=points.sort(function(a,b){
    if(Number(a)<Number(b))return 1
    if(Number(a)>Number(b))return -1
})
console.log(sortedPoints)
console.log('The farthest distance between ',Math.abs(sortedPoints[0]-sortedPoints[sortedPoints.length-1]))

//Q.3 Write a pattern which identify if a string is a valid JavaScript variable

function isValidJavaScriptVariable(sample){
    pattern=/[]/g
    return pattern.test(sample)
}
console.log(isValidJavaScriptVariable('first_name'))
console.log(isValidJavaScriptVariable('first-name'))
console.log(isValidJavaScriptVariable('1first_name'))
console.log(isValidJavaScriptVariable('firstname'))