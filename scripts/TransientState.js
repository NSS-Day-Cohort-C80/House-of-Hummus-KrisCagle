const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0,
}

export const setEntreeChoice = (entreeId) => {
    transientState.entreeId = entreeId
}

export const setVegetableChoice = (vegetableId) => {
    transientState.vegetableId = vegetableId
}

export const setSideChoice = (sideId) => {
    transientState.sideId = sideId
}

export const getOrderChoice = () => {
    return transientState
}

export const purchaseCombo = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("orderSubmitted")
    document.dispatchEvent(customEvent)
}