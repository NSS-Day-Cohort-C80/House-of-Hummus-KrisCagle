import { purchaseCombo } from "./TransientState.js"

export const addPurchaseListener = () => {
    document.addEventListener("click", async (event) => {
        if (event.target.id === "purchase") {
            await purchaseCombo()
        }
    })
}

export const Sales = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await fetchResponse.json()

    let salesHTML = sales.map((sale) => {
        const totalPrice = sale.entree.price + sale.vegetable.price + sale.side.price

    return `<div>Receipt #${sale.id} = $${totalPrice.toFixed(2)}</div>` })
    return salesHTML.join("")
}