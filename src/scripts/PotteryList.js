//define and export a "potteryList" function.
export const potteryList = (potteryArray) => {
    // the function must accept a single parameter
    // that is an array of objects.
    // the function must return a string that contains
    // all of the HTML strings for each object in the
    // array.
    let htmlString = ""
    for (const pottery of potteryArray) {
        htmlString += `<section class="pottery" id="pottery--${pottery.id}">
        <h2 class="pottery__shape">${pottery.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
        </div>
        <div class="pottery__price">Price is $${pottery.price}</div>
    </section>`
    }
    return htmlString
}
//the function must get the items to be sold form the 
//"PotteryCatalog.js" file.
// the PotteryList function must convert each object
// in the array to an HTML string.

//  <section class="pottery" id="pottery--1">
//      <h2 class="pottery__shape">Mug</h2>
//      <div class="pottery__properties">
//        Item weighs 3 grams and is 6 cm in height
//      </div>
//      <div class="pottery__price">Price is $20</div>
//    </section>

//the PotteryList function must return a single string
//that contains all of the HTML strings for each object

