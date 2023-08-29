
/*
// AS

const students = [
    { name: "mehedy bro", email: 'mehedy@gamil.com', avg: 56, fiftyPercent: true },
    { name: "rokib bro", email: 'rokib@gamil.com', avg: 57, fiftyPercent: false },
    { name: "sakib bro", email: 'sakib@gamil.com', avg: 42, fiftyPercent: false },
    { name: "sojib bro", email: 'sojib@gamil.com', avg: 52, fiftyPercent: true },
    { name: "sunny bro", email: 'sunny@gamil.com', avg: 32, fiftyPercent: false },
    { name: "saki bro", email: 'sunny@gamil.com', avg: 37, fiftyPercent: true },
    { name: "jackie bro", email: 'jackie@gamil.com', avg: 57, fiftyPercent: true }
]


const scic = students.filter(student => student.avg >= 50 && student.fiftyPercent === true);
console.log(scic);
*/


const polapain = [
    { name: "Abul", job: "sorkari", salary: 17000 },
    { name: "Babul", job: "besorkari", salary: 25000 },
    { name: "Kabul", job: "sorkari", salary: 21000 },
    { name: "Habul", job: "besorkari", salary: 47000 },
    { name: "Jabul", job: "sorkari", salary: 23000 },
    { name: "Mabul", job: "besorkari", salary: 55000 },
  ];

  const vaggobans = polapain.filter((pola) => (pola.job === "sorkari" && pola.salary >=20000) || (pola.job === 'besorkari' && pola.salary >=40000))
  console.log(vaggobans)
  const number = Math.random();
  console.log(number*vaggobans.length)
  const polaNumber = Math.floor(number*vaggobans.length)
  
  const finalJamai = vaggobans[polaNumber].name;
  console.log(`${finalJamai}, Tumi jitso...!`)






/*
const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]

{
    ID01:"abul vai",
    ID02: 'babul vai'
}

let obj ={};
obj.x = "hello";
obj["y"]="world";
const property = "phone";
obj[property]=1258004

console.log(obj)

Persons.map((person) => {
    const id = person.id;
    const name = person.name;
    obj[id]= name;

})

console.log(obj)
*/