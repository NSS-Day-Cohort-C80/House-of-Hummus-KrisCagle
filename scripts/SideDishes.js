import { setSideChoice } from './TransientState.js'
export const sideChoices = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()
    
        let sideHTML = `
            <div class='survey-input' id='side-choice'>
                <h2>Side Selection</h2>
                ${sides.map(side => `
                    <input type='radio' name='side' value='${side.id}' /> ${side.title} - $${side.price}
                `).join("")}
            </div>
        `
    
        return sideHTML
    }

    document.addEventListener("change", (event) => {
        if (event.target.name === "side") {
            setSideChoice(parseInt(event.target.value))
        }
    })