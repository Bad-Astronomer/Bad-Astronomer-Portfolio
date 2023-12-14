// corner cross template

function createCross(position, element){
  let cross = document.createElement("div");
  cross.classList.add("cross");
  cross.classList.add(`cross-${position}`);

  let crossHalfVertical = document.createElement("div");
  crossHalfVertical.classList.add("cross-half-vertical");
  let crossHalfHorizontal = document.createElement("div");
  crossHalfHorizontal.classList.add("cross-half-horizontal");

  cross.appendChild(crossHalfVertical);
  cross.appendChild(crossHalfHorizontal);

  element.appendChild(cross);
}

function cross(element){
  createCross("top", element);
  createCross("bottom", element);
}

const sections = document.querySelectorAll(".cross-section");
sections.forEach((section) => {
  cross(section); // add cross to all sections
})


// Global Helper Functions

function avg(arr){
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}
