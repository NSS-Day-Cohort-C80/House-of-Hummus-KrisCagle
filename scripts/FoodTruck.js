import { Sales } from './Sales.js'
import { entreeChoices } from './Entrees.js'
import { vegetableChoices} from './Vegetables.js'
import { sideChoices } from './SideDishes.js'
export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreeHTML = await entreeChoices()
    const vegetableHTML = await vegetableChoices()
    const sideHTML = await sideChoices()
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article>
           ${entreeHTML}
        </article>
        <article>
           ${vegetableHTML}
        </article>
        <article>
           ${sideHTML}
        </article>
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
