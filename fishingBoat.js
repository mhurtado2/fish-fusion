// write a func for boat to catch fish and makes fresh catch avaiable to customers//

// write a function for the fish caught by boat
const boatInventory = () => {
// make a variable for all the fish
    let fish = 
        [
            { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
            { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
            { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
            { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
            { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
            { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
            { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
            { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
        ]
    
    return fish
}

/*
const caughtFish = boatInventory()
console.log(caughtFish)
*/

module.exports = { boatInventory }

















/*
const catchFish = (fish) => {
// write an array of the types of fish caught
const caughtFish = ['Sword Fish', 'Trout', 'Salmon', 'Cod', 'Tilapia']
// write a loop to iterate through caught fish
for (const fish of caughtFish) {
    console.log(fish)
}

return `I caught ${fish}`
}

let freshCatch = catchFish(fish)
console.log(freshCatch)
/*
// write function to prepare fish for customers
const gutFish = () => {

}

//export functions
module.exports = { catchFish}
module.exports = { gutFish}
*/
