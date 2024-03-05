// Get a reference to the etch container
const etchContainer = document.getElementById("etch-container");
const input = document.getElementById("input");
const setbtn = document.getElementById("set-color");

let currentColor = "black";

//sets the drawing color to the color that has been assigned 
setbtn.addEventListener('click',function(){
    let color =(input.value); 
    currentColor = color.toLowerCase();
});

//create a single square element

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("etch-square");
  return square;
}

// Generate squares by looping 
for (let i = 0; i <=33; i++) {
  for (let j = 0; j <=18; j++) {
    const square = createSquare();
    etchContainer.appendChild(square);
  }
}

let isDrawing = false; // a variable inorder to check if the mouse is drawing

etchContainer.addEventListener("mousedown", () => {
  isDrawing = true; // Set isdrawing to true on mousedown
});

etchContainer.addEventListener("mouseup", () => {
  isDrawing = false; // Set isdrawing  to false on mouseup
});

etchContainer.addEventListener("mousemove", (event) => {
  if (isDrawing) {
    // Get the element under the mouse pointer
    const target = event.target;

    if (target.classList.contains("etch-square")) {
      target.style.backgroundColor = currentColor; // Change its background color
    }
  }
});

const clearBtn = document.getElementById("clear-btn"); 

clearBtn.addEventListener("click", () => {
  const squares = etchContainer.querySelectorAll(".etch-square");
  squares.forEach((square) => (square.style.backgroundColor = "white")); // Reset all squares to white
  currentColor = "black";
});
