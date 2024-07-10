const container = document.getElementById("container");
const buttons = document.querySelectorAll(".pixel-button");
const colorPicker = document.getElementById("color-picker");
const rainbowButton = document.getElementById("rainbow-button");
const eraseButton = document.getElementById("erase-button");
const clearButton = document.getElementById("clear-button");

const createPixels = (size) => {
    // Clear existing pixels
    container.innerHTML = '';

    // Calculate number of pixels per row and column
    const pixelCount = Math.floor(512 / size);
    const totalPixels = pixelCount * pixelCount;

    for (let i = 0; i < totalPixels; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "pixels");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = "#4c16fd";
        
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = colorPicker.value;
        });

        function resetPixelColors() {
            div.style.backgroundColor = "#4c16fd"
            colorPicker.value = "#DEDEDE"
        }

        function activateEraser() {
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "#4c16fd";
            })
        }

        function activateRainbow() {
            div.addEventListener("mouseenter", function() {
                const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
                div.style.backgroundColor = randomColor;
            })
        }
        
        clearButton.addEventListener("click", resetPixelColors)
        eraseButton.addEventListener("click", activateEraser)
        rainbowButton.addEventListener("click", activateRainbow)

        container.appendChild(div);
    }
};

// Default pixel size
createPixels(32);

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const size = parseInt(event.target.textContent);
        createPixels(size);
    });
});