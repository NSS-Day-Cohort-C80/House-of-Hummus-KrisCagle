import { setEntreeChoice } from './TransientState.js'
export const entreeChoices = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    let entreeHTML = `
        <div class='survey-input' id='entree-choice'>
            <h2>Entree Selection</h2>
            ${entrees.map(entree => `
                <input type='radio' name='entree' value='${entree.id}' /> ${entree.name} - $${entree.price}
            `).join("")}
        </div>
    `

document.addEventListener("change", (event) => {
    if (event.target.name === "entree") {
        setEntreeChoice(parseInt(event.target.value))
    }
})

    return entreeHTML
}

document.addEventListener("change", (event) => {
    if (event.target.name === "entree") {
        setEntreeChoice(parseInt(event.target.value))
    }
})