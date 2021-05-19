const array = [1,2,10,16]

const double = []
const newArray = array.forEach(num => {
    double.push(num * 2);
})

console.log('forEach',double)

// map - transforms the array, creates a new array

const mapArray = array.map(num => num * 2);

console.log('map',mapArray)

// filter

const filterArray = array.filter(num => num > 5);

console.log("filter", filterArray)

// reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0)

console.log("reduce", reduceArray)

// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  let usersArray = []
  array.forEach(user => {
      let { username } = user
      username = username + "!"
      usersArray.push(username)
  })
  console.log(usersArray)
  
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  const mapUsers = array.map(user=>{
      let { username } = user
      return username + "?"
  })
  console.log(mapUsers)
  
  //Filter the array to only include users who are on team: red
  const filterUsers = array.filter(user => {
      return user.team = "red"
  })
  console.log(filterUsers)
  
  //Find out the total score of all users using reduce
  const reduceUsers = array.reduce((acc,num)=>{
      return acc + user.score
  },0)
  console.log(reduceUsers)
  
  // (1), what is the value of i? - Index of the array
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i);
      alert(num);
      return num * 2;
  })
  const newArray = arrayNum.map(num => num*2)
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  const mapUsers2 = array.map(user=>{
      user.items = user.items.map(item=>{
          return item + "!"
      })
      return user;
  })
  console.log(mapUsers2)
  
