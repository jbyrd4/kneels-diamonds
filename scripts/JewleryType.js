import { getJewleryTypes, setType } from "./database.js"

const jewleryTypes = getJewleryTypes()

export const JewelryType = () => {
let html = '<ul class="types">'

const type = jewleryTypes.map((type) => {
    return `<li>
    <input type="radio" name="type" value="${type.id}"/> ${type.name}
        </li>`
})

html += type.join("")
html += "</ul>"
return html
}

document.addEventListener("change", (event) => {
    if (event.target.name === "type") {
        setType(parseInt(event.target.value))
    }
})