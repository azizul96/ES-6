
// const person = {
//     name: "mehedy",
//     age: 26
// }

// // const {name:myName} = person;
// // console.log(myName)

// function show ({name,age}){

//     // const {name,age} = obj;

//     console.log(`my name is ${name}. My age is ${age}`)
// }

// show(person)
// async function f() {
//     let result = 'first!';
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve('done!'), 1000);
//     });
//     result = await promise;
//     console.log(result);
//   }
//   f();
const obj = {a:1};
console.log(Object.keys(obj).length===0);