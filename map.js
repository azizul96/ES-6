// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const numbers = [ 2, 5, 6, 8, 9, 10]
const output = numbers.map(n => n*2)

const fiveAdded = output.map(n => n+5)
console.log(fiveAdded);


const myFriends = ['alif','alamin','shaon']
const getNameLength = myFriends.map(n => n.length)
console.log(getLength);