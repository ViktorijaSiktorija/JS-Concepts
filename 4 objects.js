// kolekcije propertija

var user = {
	name: "Vika",
	age: 28,
	hobi: "programiranje",
	isMarried: false,
	spells: ["madjija", "shazam", "boo"],
	shout: function(){
		console.log("Jaoo")
	}
}

user.favoriteFood = "spinach"
user.isMarried = true
var users = [
	{
		username: "endi",
		pass: "secret"
	},
	{
		username: "jess",
		pass: "123"
	}
]
user.spells[1];
users[0].pass;
user.shout()

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
	username: "Koko",
	password: "kuki"
}

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [user]
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

var userName = prompt("Username:")
var pass = prompt("Pass:")

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsfeed)
	}
	else {
		alert("Sorry wrong")
	}
}

signIn(userName, pass)