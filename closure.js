// If we call a function under another function inner function can use parent functions property (allows inner functions to access the outer scope of a function) 

// And every time when we call the function it keeps his previous value 
// Closures are commonly used for data encapsulation

function kitchen(){
    let roast = 0;
    return function(){
        roast++
        return roast;
    }
}
const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());