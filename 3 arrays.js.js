// Arejs

var l1 = [[
    1,2,3,4
]]

console.log(l1[0][1])

var l2 = [1,2,3,4]
l2.shift(1) // uzme prvi i skine iz liste
console.log(l2)

l2.pop(4) // skine poslednji
console.log(l2)

l2.unshift(23) // gura na pocetak
console.log(l2)

l2.push(5) // stavi na poslednje mesto
console.log(l2)

l3 = l2.concat(44,33) // stvori novu sa 44 i 33
console.log(l3)

l2.sort()
console.log(l2)

// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
array.shift()
console.log(array)

// 2. Sort the array in order.
array.sort()
console.log(array)

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi")
console.log(array)

// 4. Remove "Apples" from the array.
array.shift()
console.log(array)
// array.splice(0,1)

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]
array.reverse()
console.log(array)

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0])