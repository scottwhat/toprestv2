import { createPara } from "../helperservices";
import pizzaData from "../data";

function loadMenu() {

}




function createMenu() {
    let content = document.getElementById("content")

    let menu = document.createElement("menu")
    menu.classList.add("menu-el")



    let menuItemHolder = document.createElement("menu-item-holder")
    menuItemHolder.classList.add("menu-item-holder")

    let menuItem = document.createElement("div")
    const foodImage = document.createElement("img")
    foodImage.src = '../dist/images/pizzas/carne.png'
    menuItem.appendChild(foodImage)
    menuItem.appendChild(createPara("Salsiccia"))
    menuItem.appendChild(createPara("Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"))

    menuItem.classList.add("menu-item")
    menuItemHolder.appendChild(menuItem)


    let menuItem2 = document.createElement("div")
    foodImage.src = '../dist/images/pizzas/pepe.png'
    menuItem2.appendChild(foodImage)
    menuItem2.appendChild(createPara("Salsiccia"))
    menuItem2.appendChild(createPara("Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"))

    menuItem2.classList.add("menu-item")
    menuItemHolder.appendChild(menuItem2)


    menu.appendChild(menuItemHolder)
    content.append(menu)
}


function loadMenuItems() {
    let htmlContent = pizzaData.map( x => {
        
    })
    console.log(htmlContent)
}


export {createMenu, loadMenu}