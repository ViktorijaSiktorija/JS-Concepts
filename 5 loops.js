// for loops
var todos = [
	"ocisti sobu!",
	"uci!",
	"jedi!"
]

// i je 0, pocinje od 0
// ako je 0 manje od duzine
// i++ je i = i + 1
// dokle manje od 3, nek i raste
var todosLength = todos.length;
for (let index = 0; index < todosLength; index++) {
	todos[index] = todos[index] + "!";
	todos.pop();
}
console.log(todos)

// foreach

todos.forEach(function(todo, i){
	console.log(todo, i);
})

// while loop
var counterOne = 0;
while (counterOne < 10){
	console.log(counterOne);
	counterOne++;
}

var counterOne = 10;
while (counterOne > 0){
	console.log(counterOne);
	counterOne--;
}

// do while

var counterTwo = 10
do {
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo > 0)

// facebook vezba update

var user = {
	username: "Koko",
	password: "kuki"
}

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [{
	username: "Koko",
	password: "kuki"
},{
	username: "Seli",
	password: "123"
},{
	username: "Ingrid",
	password: "777"
}]
console.log(database)

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Mira",
		timeline: "Cao ja sam mira"
	},
	{
		username: "Jole",
		timeline: "Ja sam Jole"
	},
	{
		username: "Nana",
		timeline: "cao nana"
	}
]

function isUserValid(username, password) {
	for (let i = 0; i < database.length; i++){
		if (database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username,password) {
	if (isUserValid(username,password)) {
		console.log(newsfeed)
	} else {
		alert("wrong!")
	}
}

var userName = prompt("Username:")
var password = prompt("Pass:")

signIn(userName, password)