// Get a reference to the etch container
const etchContainer = document.getElementById("etch-container");
const input = document.getElementById("input");
const setbtn = document.getElementById("set-color");

let currentColor = "black";

setbtn.addEventListener('click',function(){
    let color =(input.value); 
    currentColor = color.toLowerCase();
});

// Function to create a single square element
function createSquare() {
  const square = document.createElement("div");
  square.classList.add("etch-square");
  return square;
}

// Generate squares (adjust loop counts for desired grid size)
for (let i = 0; i <=14; i++) {
  for (let j = 0; j <=20; j++) {
    const square = createSquare();
    etchContainer.appendChild(square);
  }
}

// Track current drawing color (optional)
 // Can be changed to allow color selection
// Drawing functionality
let isDrawing = false; // Flag to track drawing state

etchContainer.addEventListener("mousedown", () => {
  isDrawing = true; // Set drawing flag to true on mousedown
});

etchContainer.addEventListener("mouseup", () => {
  isDrawing = false; // Set drawing flag to false on mouseup
});

etchContainer.addEventListener("mousemove", (event) => {
  if (isDrawing) {
    // Get the element under the mouse pointer
    const target = event.target;

    // Check if the target is a square element
    if (target.classList.contains("etch-square")) {
      target.style.backgroundColor = currentColor; // Change its background color
    }
  }
});

// Clear button functionality (optional)
const clearBtn = document.getElementById("clear-btn"); // Assuming a clear button exists

clearBtn.addEventListener("click", () => {
  const squares = etchContainer.querySelectorAll(".etch-square");
  squares.forEach((square) => (square.style.backgroundColor = "white")); // Reset all squares to white
  currentColor = "black";
});
