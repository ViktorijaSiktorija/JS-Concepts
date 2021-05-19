// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const { firstName, lastName, age, eyeColor} = person;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
    a,
    b,
    c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const message = `Hello ${firstName} bla bla in ${city} last summer?`

// default arguments
// default age to 10;
function isValidAge() {
    return age
}

const isValidAge = (age=10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

const sym = Symbol('This is my firsy symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username,location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}