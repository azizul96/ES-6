// if there are more arguments than parameters
// so they called array like object and don't support - map and f3
// we can run for loop in this

function sum(a, b, c){
    console.log(arguments);
    const result = a+b+c
    return result
}

console.log(sum(2,5,2,5,8,7,9));




// pass by reference and pass by value------------
// primitive type don't keep reference and
// Non primitive type keep reference (Object and Array)

