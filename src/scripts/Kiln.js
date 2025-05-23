// define and export a function name firePottery
//that is responsible for acting as a kiln
export const firePottery = (pottery, temperature) => {
     if (temperature > 2200) {
        pottery.cracked = true
     } else {
        pottery.cracked = false
}
return pottery
}
// the function must accept the following values as
// input parameters:

// an object that represents a piece of pottery
// that was made at the wheel in the makePottery
// function.

// a number specifying the temperature of the kiln.

// the function must add a new property to the object
// called "cracked" and set it to true.

// if the temperature is greater than 2200 degrees
// then set the cracked property to true.

// if the temperature is less than or equal to 2200
// then set the cracked property to false.

// after both of the new properties have been added
// return the augmented object.