//ES7

// includes
'Helloo'.includes('o');//true
const pets = ['cat','dog']
pets.includes('dog') // true
// exponental operator
const square = (x) => x**2
const cube = (y) => y**3

// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes("John")


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons2.filter(name => name.includes('John')) // ['Johnathan']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power = (x) => x**100

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(power(1000)) //infinity

//ES8
'Turtle'.padStart(10) //padEnd

const fun = (a,b,c,d,) => {
    console.log(a)
}
fun(1,2,3,4,) // 1

// pre bilo Obect.keys, sada .values i .entries
let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Grinc'
}
Object.keys(obj).forEach((key,index)=>{
    console.log(key,obj[key])
})
Object.values(obj).forEach(value => {
    console.log(value)
})
Object.entries(obj).forEach(value=>{
    console.log(value); // izadje lista keys i values, loop for objects
})
Object.entries(obj).map(value=>{
    return value[1] + value[0].replace('username', ""); 
})

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
'     ||<- Start line'
'🐢======='
'       🐇'

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
Object.entries(obj).map(value => value.join(" ")).join(' ')