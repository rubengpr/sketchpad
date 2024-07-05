const container = document.getElementById("container");
const buttons = document.querySelectorAll(".pixel-button");

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
        div.style.backgroundColor = "orange";

        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "lightgray";
        });

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
