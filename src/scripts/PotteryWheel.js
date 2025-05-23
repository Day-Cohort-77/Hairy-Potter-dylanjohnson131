//Define a variable to have the value of the primary
// key for each piece of pottery. It should have an 
// initial value of 1. 
let primaryKey = 1;
// Define and export a function named makePottery.
export const makePottery = (shape, weight, height) => {
    // the function must return an object with the
    // following properties:
    // - shape
    // - weight
    // - height
    // - id (increment this value each time the function is
    // called)
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey
    };
primaryKey++

return pottery;
};
// the function must accept the following values as
// input parameters:
// - shape of the piece of pottery
// - weight of the piece of pottery
// - height of the piece of pottery

// the function must also return an object with the 
// following properties:
// - shape
// - weight
// - height
// - id (increment this value each time the function is
// called)
// makePottery(shape, weight, height, primaryKey);