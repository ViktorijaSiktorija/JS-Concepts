// reference type
var object1 = {value:10}
var object2 = object1;
var object3 = {value:10}
// context vs scope
function b() {
    console.log(this)
}
const obj4 = {
    a: function(){
        console.log(this)
    }
}

// instantiation
// make a copy of the object and reuse the code
class Player {
    constructor(name, type) {
        console.log(this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi i am ${this.name}, I am ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name,type)
    }
    play() {
        console.log(`I am ${this.type}`)
    }
}
const wizard1 = new Wizard("Seli", 'Healer')
const wizard2 = new Wizard("Son", 'Magic')

// pass by reference

let obj1 = {
    name: 'Viki',
    password: '123'
}
obj2 = obj1
obj2.password = 'lako'
console.log(obj1)
console.log(obj2)

var c = [1,2,3,4,5]
var d = c
d.push(324512)
console.log(c) // menja se i c
console.log(d)

a = [2,2,2]
var e = [].concat(a) // e je novi, a se ne menja
console.log(e)
console.log(a)

let obj = {
    a:'a',
    b:'b',
    c: {
        deep: 'try and copy me'
    }
}
let clone = Object.assign({}, obj)
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))
obj.c.deep = 'Cao'
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)

// type coercion
1 == '1' //true, misli da je 1 broj 1
1 === '1' //false
if (1){
    console.log(5) // 5,1 je true, 0 is false
}

//Evaluate these:
//#1
[2] === [2] //false
{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5}; // 5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name,type,color){
        this.name = name
        this.type = type
        this.color = color
    }
}
class Mamal extends Animal {
    constructor(name,type,color){
        super(name,type,color)
    }
    sound(){
        console.log(`MOO my name is ${this.name}, my color is ${this.color}, i am a ${this.type}`)
    }
}
const cow = new Mamal('Ana','brown','kravica')