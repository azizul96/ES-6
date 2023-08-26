
// Like map but forEach do not return anything  / just do the work in function
const numbers = [ 2, 5, 6, 8, 9, 10]
const output = numbers.forEach(n => n*3)


// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const age = [12, 22, 33, 45, 56, 78, 85]
const getAge = age.filter(n => n > 50)
console.log(getAge);



//  Find select an element based on a condition and returns a Number

const myNumbers = [12, 22, 33, 45, 56, 78, 85]
const findNumber = myNumbers.find(n => n > 50)
console.log(findNumber);



// Reduce =====
const numberReduce = [12, 22, 33, 45, 56, 78, 85]
const getSum = numberReduce.reduce((p,c) => p+c,0)
console.log(getSum);
