// import function from fish monger 
const { boatInventory } = require("./fishingBoat.js")
const { mongerInventory } = require("./fishMonger.js")


// func will have to parameter price
const chefsInventory = (price) => {
    // write a for of loop to access fish in monger invent
    // make blank array for desired fish to be returned
    const newchefsInventory = []
    // make a for of loop to iterate through the fish of monger Inventory function
    for (fish of boatInventory()) {
        // write a conditional statment that if 
        if (fish.price <= price) {
            // since the new inventory is always gonna be five add a property of ten
            //to the new array
            fish.amount = 5
            newchefsInventory.push(fish)
        }
    }
    return newchefsInventory

}

const restaurantPurchase = chefsInventory(5.00)
//console.log(restaurantPurchase)


const fishMenu = () => {
    let menuHTMLWrap = ''
    for (const fish of restaurantPurchase) {
        menuHTMLWrap += `<h1>Menu</h1>\n<article class= "menu">
    \t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} Sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n</article>`
        //console.log(menuHTMLWrap)
    }
    return menuHTMLWrap
}

/*
const menu = fishMenu()
console.log(menu)
*/


/*
const fishMenu = () => {
    let menuHTMLWrap = ''
    for (fish of boatInventory()) {
     menuHTMLWrap = `<h1>Menu</h1>\n<article class= "menu">
    \t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} Sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n</article>`
}
return menuHTMLWrap
}

const menu = fishMenu()
console.log(menu)



/*
const fishMenu = () => {
    for (fish of boatInventory()) {
        let menuHTMLWrap = `<h1>Menu</h1>\n<article class= "menu">
    \t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} Sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n</article>`
        return menuHTMLWrap
    }
       if (fish.species === 'Halibut') {
}
 if (fish.species === 'Mackerel') {
    let menuHTMLWrap = `<h1>Menu</h1>\n<article class= "menu">
    \t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} Sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n</article>`
    return menuHTMLWrap
}
 if (fish.species === 'Mackerel') {
}
else {
    let menuHTMLWrap = `<h1>Menu</h1>\n<article class= "menu">
    \t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} Sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n</article>`
    return menuHTMLWrap
    }
}
*/

/*
const fishMenu2 = () => {
    for (fish of boatInventory()) {
        if (fish.species === 'Halibut') {
        }
        else {
            let menuHTMLWrap = `<h1>Menu</h1>\n<article class= "menu">
    \t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} Sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n</article>`
            return menuHTMLWrap
        }
    }
}

const fishMenu3 = () => {
    for (fish of boatInventory()) {
        if (fish.species === 'Halibut' || fish.species === 'Mackerel') {
        }
        else {
            let menuHTMLWrap = `<h1>Menu</h1>\n<article class= "menu">
    \t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} Sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n</article>`
            return menuHTMLWrap
        }
    }
}

const menu = fishMenu()
console.log(menu)

/*
let menu = fishMenu()


let menu2 = fishMenu2()


let menu3 = fishMenu3()

const finalMenu = menu + menu2 + menu3
console.log(finalMenu)
*/

/*
const fishMenu = (price) => {
    for (fish of mongerInventory()) {
        const chefsInventory = []
        if (fish.price > price){
            chefsInventory.push(fish)
        }
    }
    return `<h1>Menu</h1>\n<article class= "menu">
    \t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} Sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n</article>`
}
const menu = fishMenu(5.00)
console.log(menu)
*/


/*
const menuHTMLWrap = `<h1>Menu</h1>\n<article class= "menu">
\t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} Sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n</article>`

console.log(menuHTMLWrap)



/*
const menu = fishMenu()
console.log(menu)

/*
 // should specify max amount she can spend per fish
 // 5 dollars per fish
 // she will buy 50 percent of inventory
 // write a loop to iterate though fish
 //const chefsInventory = []
 for (fish of mongerInventory()) {
     fish.amount = 5
    // chefsInventory.push(fish)
 }
     return fish
 }

const chefsPurchase = fishMenu()
console.log(chefsPurchase)


const mongerInventory = (price) => {
 // write a for of loop to access fish in boat invent
 // make blank array for desired fish to be returned
 const newMongerInventory = []
 // make a for of loop to iterate through the fish of boat Inventory function
 for (fish of boatInventory()) {
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
*/
//export 


/*
// build a function called fish menu
const fishMenu = () => {
    //you already have an array of 5 dollar fish that restaurant owner will buy
    //from last problem
    for (fish of mongerInventory()) {
        //const chefsMenu = []
    if (fish.price <= 5.00) {
    const menuHTMLWrap = `<h1>Menu</h1>\n<article class= "menu">
    \t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} Sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n</article>`
        }
        console.log(menuHTMLWrap)
    }
    return menuHTMLWrap
}
const menu = fishMenu()
console.log(menu)
*/

module.exports = { fishMenu }
