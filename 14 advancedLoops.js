const basket = ['apples','oranges','grapes']

basket.forEach(item=>{console.log(item)}) 

// for of
// iterating - go 1 by 1 and look at these items;]
// done over iterables -> you can iterate over this thing: arrays,strings
for (item of basket) {
    console.log(item)
}

// for in - loop and see object properties
// enumerating, not iterating! Properties of an object are enumerables
// we can usee them in a for in loop
const detaiedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
for (item in detaiedBasket) {
    console.log(item)
}

// JS arrays are like objects, for in can work for an array
// basket = {0:'apples',1:'oranges',2:'grapes'}

//const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
      if (highest < arr[i]) {
        highest = arr[i];
      }
    }
    return highest
  }
console.log(biggestNumberInArray(array))

function biggestNumberInArray2(arr) {
    let highest = 0;
    array2.forEach(item => highest < item ? highest = item : "")
    return highest
}
console.log(biggestNumberInArray2(array2))

function biggestNumberInArray3(arr) {
 let highest = 0;
 for (item of arr){
     highest < item ? highest = item : ""
 }
 return highest
}
console.log(biggestNumberInArray3(array3))

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
    for (item in basket){
        if (item === lookingFor){
            return `${lookingFor} is in your basket`
        }
    }
    return 'that does not exist in your basket'
}
console.log(checkBasket(amazonBasket,'glasses'))