// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 8, 6)
//console.log(mug)
let bowl = makePottery("Bowl", 7, 5)
//console.log(bowl)
let vase = makePottery("Vase", 9, 8)
//console.log(vase)
let plate = makePottery("Plate", 10, 4)
//console.log(plate)
let cup = makePottery("Cup", 12, 3) 
//console.log(cup)

// Fire each piece of pottery in the kiln

let mugFired = firePottery(mug, 2000)
//console.log(mugFired)
let bowlFired = firePottery(bowl, 2100)
//console.log(bowlFired)
let vaseFired = firePottery(vase, 2300)
///console.log(vaseFired)
let plateFired = firePottery(plate, 2200)
//console.log(plateFired)
let cupFired = firePottery(cup, 2400)
//console.log(cupFired)

let mugToSell = toSellOrNotToSell(mugFired)
console.log(mugToSell)    
let bowlToSell = toSellOrNotToSell(bowlFired)
console.log(bowlToSell)
let vaseToSell = toSellOrNotToSell(vaseFired)
console.log(vaseToSell)
let plateToSell = toSellOrNotToSell(plateFired)
console.log(plateToSell)
let cupToSell = toSellOrNotToSell(cupFired)
console.log(cupToSell)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

//take its return value and update the innerHTML of the
// article element you created in the PotteryList.js file.

// when you start the server you should see your 
// non-cracked pottery list appear in the browser.
//PUSH TO GITHUB






// once the makePottery function is invoked, has 
// provided the required values as arguments, stored 
// the object that gets returned into a variable, and
// and then used the console.log() function to 
// view the object, push it to github.


// once the firePottery function has been invoked,
// for each of the 5 pieces of pottery, and have ensured
// that the required values have been passed as 
// arguments, store the object that gets returned into
// a variable, and then use the console.log() function
// to view the object, push it to github.