const person = {
    name: 'Alif',
    age: 25,
    isStudent: true,
    address: 'Barishal'
}
console.log(person);
const personStringify = JSON.stringify(person)
console.log(personStringify);
console.log(JSON.parse(personStringify));