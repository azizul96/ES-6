// // Object destructuring
// const person = { 
//     firstName : 'Alif',
//     age: 25 ,
//     isStudent: true
// }

// const {firstName, age} = person
// console.log(firstName, age);


// // Array destructuring

// const numbers = [11, 22]
// const [num1, num2] = numbers
// // we can assign direct
// const [x, y] = [33, 44]

function multiplyNumbers(x, y ){
    return[x*2, y*2]
}
const [num1, num2 ] = multiplyNumbers(11, 22)
console.log(num1, num2);


const arr = [3,4,5,6,7,8,9]

const [a,b,c, ...rest] = arr
console.log(a,b,c, rest);
console.log(a,b,c, ...rest);