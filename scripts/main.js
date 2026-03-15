import { FoodTruck } from './FoodTruck.js'
import { addPurchaseListener } from './Sales.js'

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

addPurchaseListener()

document.addEventListener("newOrderCreated", async () => {
    await renderAllHTML()
})

renderAllHTML()

