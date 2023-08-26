function greetings(greet, name){
    greet(name)
}


function greetMorning(name){
    console.log('Good Morning', name);
}
function greetEvening(name){
    console.log('Good Evening', name);
}
function greetNight(name){
    console.log('Good Night', name);
}

greetings(greetMorning, 'Alif')
greetings(greetMorning, 'Alamin')
greetings(greetEvening, 'Alif')
greetings(greetNight, 'Alamin')