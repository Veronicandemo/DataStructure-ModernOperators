'use strict';

// Data needed for a later exercise
// const flights =
  // '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },


    order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex] ]

  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    will be delivered to ${address} at ${time}`)
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza: function(mainIng, ...otherIngr) {
    console.log(mainIng)
    console.log(otherIngr)
  }

};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Angelo Tavanti 23',
  mainIndex: 2,
  starterIndex: 2
})

restaurant.orderDelivery({
  address: 'Via Angelo Tavanti 23',
  time: '21:00'
})
restaurant.orderPizza('mashrooms', 'onions', 'olives', 'spinach')
// const ingredients = [prompt(`Let's make pasta! Ingridient 1? `), 
// prompt(`Ingridient 2?`), 
// prompt(`Ingridient 3?`)]
// console.log(ingredients)
// restaurant.orderPasta(...ingredients)
const rest1 = {
  name: 'Capri',
  numGuests: 0,

}
const rest2 = {
  name: 'La piatza',
  ownwer: 'Geovanni Rossi',
}
// rest2.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest1.numGuests || 10
//Nullish assignment operator
rest1.numGuests ??= 10
rest2.numGuests ??= 10

rest1.ownwer  &&= '<ANONYMOUS>'
rest2.ownwer  &&= '<ANONYMOUS>'

console.log(rest1)
console.log(rest2)
///////NULLISH COALESCING OPERATOR ************

console.log('Nullish')
restaurant.numGuests = 0
const guests = restaurant.numGuests || 10 //10 which is not correct 
// console.log(guests)
const guestsCorrect = restaurant.numGuests ?? 10
console.log(guestsCorrect)  //0 which is the number of guests that we want 



///OBJECTS //////////////////

const newRestaurant = {
  foundingYear: 1998,
  ...restaurant,
founder: 'Ndemo Vee',

}
console.log(newRestaurant)
console.log(restaurant)


///Create shollow copies instead of object.assign

const restaurantCopy = {...restaurant}
restaurantCopy.name = 'Restaurante Roma'
console.log(restaurant.name)
console.log(restaurantCopy.name)


//The spread operator//////////////////
//*****used on the right side of the asignment operator */
//Almost similar to destructuring
//Used to expand an array into the elements of an array

const arr = [7,8,9]
//
const  newArr = [1, 2, 3 , ...arr]
console.log(newArr)
//logs individual elements of an array
console.log(...newArr)


const newMenu = [...restaurant.starterMenu, ...restaurant.mainMenu, "Gnocci"]
console.log(newMenu)

//Use cases of spread operator
const mainMenuCopy = [...restaurant.mainMenu]
//To join two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)

//Iterabes are: strings, arrays,maps,sets but NOT objects

const str = 'Jonas'
const letters = [...str, ' ', 'S.']
console.log(letters)

/*
////////////////////////////////////////////
//DESTRUCTURING OBJECTS

///we have to specify name of the propertiea
const {name, openingHours, categories} = restaurant
console.log(name, openingHours, categories)

const {name: restaurantName, 
  openingHours: hours, 
  categories: tags} = restaurant
console.log(restaurantName,hours,tags)

//Default Values
const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters)


//Mutating Values 
// let a = 111
// let b = 999

// const obj = {a:23, b:27, c:14}

// ({a,b} = obj)

// console.log(a,b)


///NESTED OBJECTS
const {fri: {open, close}} = openingHours
console.log(open, close)
*/




///DESTRUCTURING ARRAYS
// const arr = [2,4,5,6]
// const a= arr[0]
// const b= arr[1]
// const c= arr[2]

// const [x,y,z,w] = arr
// console.log(x,y,z,w)

// //takes two elements from the array..the fist two elements of the array
// // let [main,secondary] = restaurant.categories
// // console.log(main,secondary)

// // [main, secondary] = [secondary,main]
// // console.log(main,secondary)

// const [starter, mainCourse] = restaurant.order(2,0)
// console.log(starter, mainCourse)

// //nested Array
// const nested = [2,4,[6,7]]
// const [i,,[k,l]] = nested
// console.log(i,k,l)

// // default values
// const [p=1,q=1,r=1] = [7,8]
// console.log(p,q,r)

///******SHORT CIRCUITING */
console.log('.......OR ......')
//The OR operator ||
//If the first value is a truthy value it will immediately return that value
console.log(3 || 'Jonas') //3
console.log(''|| 'Jonas') //'Jonas'
console.log(true || 0) 
console.log(undefined || null)
console.log(undefined || 0 || '' || 'Hello'|| 23 || null ) //Hello
//HEllo is the first truthy value i the chain of Or operations

restaurant.numGuests = 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1)

const guests2 = restaurant.numGuests || 10

console.log('........AND .....')
console.log(0 && 'Jonas')  //0
console.log(7 || 'Jonas') //'Jonas'
console.log('Hello' && 23 && null && 'jonas') //null


//Practical Example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach')
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

///REST OPERATOR
//********used on the right side of the assignment operator */

//1.) DESTRUCTURING

const [a,b,c, ...others] = [1,2,3,4,5,6,7]

///takes the remaining elements of an array and put them in a new array
console.log(a,b,others)

//We can use the three dots on both sides of the assignment operator
  const [pizza, , risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFoods)

///OBJECTS******///
const {sat, ...weekDays} = restaurant.openingHours
console.log(weekDays)

//2). FUCTIONS
//The rest syntax takes multiple numbers  or values and packs them  into  an  array
//parameters 
const add = function (...numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++)

      sum += numbers[i]
    console.log(sum)
  }
add(2,3)
add(5,3,7,2)

const x = [23,5,7]
add(...x)

////LOOPING THROUGH ARRAYS
console.log('****The for-of loop****')
const loopedmenu = [...restaurant.starterMenu, ...restaurant.mainMenu]
for(const item of menu){
  console.log(item)
}
for(const [i, el] of menu.entries()){
  // console.log(`${item[0] +1}: ${item[1  ]}`)
  console.log(`${i +1}: ${el}`)
 
}

///WORKING WITH STRINGS
console.log('***Working with strings****')
const airline = 'TAP Air Portugal';
const plane = 'A320';

///Getting a character at a certain position
console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
//Length property
console.log(airline.length)


console.log('***String Methods***')
console.log(airline.indexOf('r')) //index first occurane of r
console.log(airline.lastIndexOf('r')) //idex of last occurance
console.log(airline.indexOf('Portugal')) //entire word also case sensitive

//Slice method
console.log(airline.slice(4)) //Air Portugal
console.log(airline.slice(4,7)) //substring does not include the last index of the slicing params

console.log(airline.slice(0,airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ') + 1))

console.log(airline.slice(-2)) //last two characters
console.log(airline.slice(1, -1)) //slicing from the first character up to the last not including the last char

//A funnction that recieves an airplane seat and logs to console whether it is a middle seat or not
const checkMiddleSeat = function(seat){
  //B and E are middle seats
  //Check if the  string contains a B or E
  const s = seat.slice(-1)
  if(s === 'B' || s === 'E'){
    console.log('You got the middle seat 😬')
  }else{
    console.log('You got lucky 😎')
  }

}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

//BOXING
console.log(new String ('Veronica'))

console.log(typeof new String ('Veronica')) //object
//all the methods return  primitives
console.log(typeof new String ('Veronica').slice(1)) //string

//Changig the case 
console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

//Fix Capitalisation in passanger Name
const passanger = 'jONas'
//To fix it put everything to lowercase first
const passangerLower = passanger.toLowerCase()
console.log(`${passangerLower.slice(0,1).toUpperCase() + passangerLower.slice(1)} `)
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1)
console.log(passangerCorrect)


// const correctName = function (passName){
//   return  console.log(`${passangerLower.slice(0,1).toUpperCase() + passangerLower.slice(1)} `)
 
// }
// // console.log(fixed.indexOf('j').toUpperCase())
// correctName('vEroNica')
//Comparing  user email
 const email = 'hello@vee.com'
 const logEmail = 'HellO@VeE.coM '

//  const lowerEmail = logEmail.toLowerCase()
//  const trimmedEmail = lowerEmail.trim()
//  console.log(trimmedEmail)

///IN one step
 const normalisedEmail = logEmail.toLowerCase().trim()
 console.log(normalisedEmail)
 console.log(email === normalisedEmail)


 //replace parts of strings
 //case sensitive
 const priceKS = '288.98Ksh'
const priceUs = priceKS.replace('Ksh', '$')  
console.log(priceUs)

//Whole string
const announcement = 'All customers come to boarding door 23. Bording door 23'
//replaces only the first occurance
console.log(announcement.replace('door', 'gate'))
//All occurences
console.log(announcement.replaceAll('door', 'gate'))
console.log(announcement.replace(/door/g, 'gate'))
//the g flag stands for global

//Boolens 3 methods
//-Includes
//-starts with
//-endswith

//includes
const newPlane = 'AirBus A320neo'
console.log(newPlane.includes('A320')) //tru
console.log(newPlane.includes('Booing')) //false
//starsWith
console.log(newPlane.startsWith('Air')) //false

if(newPlane.startsWith('AirBus') && newPlane.endsWith('neo')){
console.log('Part of the new AirBus family')
}

const checkBuggage = function(items){
const baggage = items.toLowerCase()
if(baggage.includes('knife') || baggage.includes('gun')){
console.log('You are not allowed on board')
}else{
  console.log('Welcome on aboard')
}

}
checkBuggage(`I have a laptop, some Food and a Pocket Knife`)
checkBuggage('Socks and camera')
checkBuggage('Got some socks and a gun for protection')


//The split method
console.log('a+very+nice+string'.split('+'))
console.log('Veronica Ndemo'.split(' '))
const [firstName, LastName] = 'Veronica Ndemo'.split(' ')
const newName = ['Mrs.', firstName, LastName.toUpperCase()].join(' ')
console.log(newName)

//Capitalise the the first letter of each name
const capitaliseName = function(pName){
const names = pName.split(' ')
const namesUpper = []
for( const n of names ){
  namesUpper.push(n[0].toUpperCase() + n.slice(1))
}
console.log(namesUpper.join(' '))
}
capitaliseName('jessica ann smith davis')
capitaliseName('Veronica ndemo')


//to tittle Case
const capitalCase = function(str){
  const stringArr = str.split(' ')
  console.log(stringArr) // ['a', 'busy', 'office']
  const newStrArr = []
  for(const word of stringArr){ //looping on every word in the array
    // newStrArr.push(word[0].toUpperCase() + word.slice(1)) 

    //alternatively
    newStrArr.push(word.replace(word[0], word[0].toUpperCase()))
  }
  console.log(newStrArr.join(' '))

}
capitalCase('a busy office')

//*******PADDING A STRING ******/
//Adding a number of characters to a string until the lenght of the string has the desired length
const message = ' Go to gate 23'
console.log(message.padStart(25, 'please ').padEnd(35, '+')) //string is 35 characters long
// console.log(message.padEnd(25, ))

const maskCreditCard =  function(number){
  const str = String(number)
  const last = str.slice(-4)
  return last.padStart(str.length, '*')
}
console.log(maskCreditCard(34343545469857))
console.log(maskCreditCard(2334455))

//repeat method
const message2 = 'Bad weather... All departures delayed'
console.log(message2.repeat(5))































 