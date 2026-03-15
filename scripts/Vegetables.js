
import { setVegetableChoice } from './TransientState.js'
export const vegetableChoices = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()
    
    let vegetableHTML = `
        <div class='survey-input' id='vegetable-choice'>
            <h2>Vegetable Selection</h2>
            ${vegetables.map(vegetables => `
                <input type='radio' name='vegetable' value='${vegetables.id}' /> ${vegetables.type} - $${vegetables.price}
            `).join("")}
        </div>
    `

    return vegetableHTML
}
document.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVegetableChoice(parseInt(event.target.value))
    }
})