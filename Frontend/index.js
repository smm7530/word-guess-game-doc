console.log ("Wordle")
const rootElement = document.getElementById("root")

const renderHeader = () => {
    const header = document.createElement("div")
    header.classList.add("header")

    const headerText = document.createElement("h1")
    headerText.classList.add("header-text")
    headerText.textContent = "Wordle"

    header.appendChild(headerText)
    rootElement.appendChild(header)
}
renderHeader()