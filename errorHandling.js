// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

// // async
// try{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
// }
// catch{

// }

// // document.getElementById('abc');

// // synchronous asynchronous
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 3000);
// console.log(3);
// console.log(15);
// console.log(15);
// console.log(15);
// console.log(15);
// ---------------------------------------------

function checkAge(){
    const ageField = document.getElementById('age')
    const ageText = ageField.value;
    const errorTag = document.getElementById('error')
    try{
        const age = parseInt(ageText);
        if(isNaN (age)){
            throw "Please enter a number";
        }
        else if(age<18){
            throw "Kids Are Not Allowed";
        }
        else if(age>30){
            throw "Old man is not allowed";
        }
        errorTag.innerHTML = "";
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML = 'ERROR: ' + err
    }
    finally{
        console.log('ALL DONE');
    }
}