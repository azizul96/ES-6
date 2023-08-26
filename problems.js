// const multiplyNumbers = (num1, num2, num3) =>  {
//     const result = num1*num2*num3
//     return result
// }

// console.log(multiplyNumbers(3,4,5));
// // ----------------------------------------

// const  myThreeLine = `I am web developer.
// I love to code.
// I love to eat biryani.`
// console.log(myThreeLine);
// // ------------------------------------------
// const multiplyNumbers = (num1, num2= 5, ) =>  {
//     const result = num1 + num2
//     return result
// }

// console.log(multiplyNumbers(3));



// const evenFriends= (name) => {
//     const friends = []
//     for (const item of name) {
//         const evenItem = item.length
//         const evenItemValue = evenItem % 2
//         if(evenItemValue == 0){
//             friends.push(item)
//         }
//     }
//     return friends;
// }

// const myFriends = ['alif','alamin','shaon']
// const myFunction = evenFriends(myFriends)
// console.log(myFunction);



// square each array element - calculate the sum of squared elements - return the average 
// const squareNumber =(numbers) => {
//     let sum = 0;
//     for (const item of numbers) {
//         const square = item ** 2
//         sum = square+sum
//     }
//     return sum / numbers.length
// }

// const numbers = [11,22,33,44,55]
// const getSquare = squareNumber(numbers)
// console.log(getSquare);


// 
 
// const findMaxInTwoArray = (arr1 , arr2) => {
//     const newArray= [...arr1, ...arr2]
//     const maxNumber = Math.max(...newArray)
//     return maxNumber
// }
// const first = [11, 22, 33]
// const second = [44, 55, 66]
// console.log(findMaxInTwoArray(first, second));


/*
// make the even Array  with this  odd Array

const oddNumbers = [ 1, 3, 5, 7, 9]
const evenNumbers = oddNumbers.map(n => n+1)
console.log(evenNumbers);

// Elements are divisible by 10

const numbers = [33, 50, 79, 78, 90, 101, 30]
const getDivisible = numbers.filter(n => n % 10 === 0)
console.log(getDivisible);


const numbers2 = [33, 50, 79, 78, 90, 101, 30]
const getDivisible2 = numbers2.find(n => n % 10 === 0)
console.log(getDivisible2);
*/


const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akhil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}
]

const getPosition = instructor.filter(n => n.position === "Senior")
console.log(getPosition);


const people =[
    {name: 'Meena', age: 20},
    {name: 'Reena', age: 15},
    {name: 'Shuchorita', age: 22}
]
const sumOfAge = people.reduce((n , p)=> n+p.age, 0)

console.log(sumOfAge);







/*
// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
console.log(data.Sophia.study[1].secondary[1].location);


// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}
console.log(students['2222'].address['city']);
console.log(students['3333'].name );


// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCategory);
*/

