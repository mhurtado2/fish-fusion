
// import fuction from fishing boat
const { boatInventory } = require("./fishingBoat.js")

// func will have to parameter price
const mongerInventory = (price) => {
    // write a for of loop to access fish in boat invent
    // make blank array for desired fish to be returned
    const newMongerInventory = []
    // make a for of loop to iterate through the fish of boat Inventory function
    for (const fish of boatInventory()) {
        // write a conditional statment that if 
        if (fish.price <= price) {
            // since the new inventory is always gonna be ten add a property of ten
            //to the new array
            fish.amount = 10
            newMongerInventory.push(fish)
           
            //console.log(newMongerInventory)
        }
    }
    return newMongerInventory
    
}


const mongerPurchase = mongerInventory(7.50)
console.log(mongerPurchase)


module.exports = { mongerInventory }