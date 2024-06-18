const container = document.getElementById("container");
const rangeInput = document.getElementById("range-input")
const selectedRangeValue = document.getElementById("selected-value")

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.style.width = "32px"
    div.style.height = "32px"
    div.style.backgroundColor = "orange"

    container.appendChild(div)

    function changeColor() {
        div.style.backgroundColor = "lightgray"
    }
    
    div.addEventListener("mouseenter", changeColor)


}

rangeInput.addEventListener("input", function() {
    selectedRangeValue.textContent = rangeInput.value + "x" + rangeInput.value
    div.style.backgroundColor = "orange"
    div.style.width = rangeInput.value
    div.style.height = rangeInput.value
})