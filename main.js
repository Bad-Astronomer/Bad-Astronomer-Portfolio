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


// Header title
// const titles = [
//   "{ COMPUTER ENGINEER }",
//   "{ ML / DL ENGINEER }",
//   "{ FRONTEND ENGINEER }",
//   "{ UI / UX DESIGNER }"
// ]

const titles = [
  {
    tag: "{ COMPUTER ENGINEER }",
    color: "#08b59e"
  },
  {
    tag: "{ ML / DL ENGINEER }",
    color: "#52A8FF"
  },
  {
    tag: "{ FRONTEND DEVELOPER }",
    color: "#03C988"
  },
  {
    tag: "{ UI / UX DESIGNER }",
    color: "#B6EADA"
  },
]

const heroTitle = document.getElementById("hero-subtitle");

function createTitle(text){
  let tempTitle = document.createElement("span");
  tempTitle.classList.add("hero-subtitle-span");
  tempTitle.classList.add("hero-subtitle-span-up");
  tempTitle.innerHTML = text;
  return tempTitle;
}

let titleIndex = 0;
let currentTitle = heroTitle.querySelector("span");
currentTitle.style.color = titles[0].color;

//! TEMP
const animationTime = 120;

setInterval(() => {
  titleIndex = (titleIndex + 1) % titles.length;
  let text = titles[titleIndex];

  let tempTitle = createTitle(text.tag);
  heroTitle.appendChild(tempTitle);
  tempTitle.style.transformOrigin = "top";
  tempTitle.style.transform = "scaleY(0)";
  tempTitle.style.opacity = 0;
  tempTitle.style.color = text.color;
  tempTitle.style.transition = `transform ${animationTime}ms linear, opacity ${animationTime}ms ease-in`;
  
  setTimeout(() => {
    tempTitle.style.transform = "scaleY(1)";
    tempTitle.style.opacity = 1;
  }, 1);

  currentTitle.style.transition = `transform ${animationTime}ms linear, opacity ${animationTime}ms ease-in`;
  currentTitle.style.transformOrigin = "bottom";
  currentTitle.style.transform = "scaleY(0)";
  currentTitle.style.opacity = 0;

  setTimeout(() => {
      currentTitle.remove();
      currentTitle = tempTitle;
  }, animationTime);
}, 4000);


// About content

const aboutCode = document.getElementsByClassName("about-code");
let indent = "&emsp;&emsp;&emsp;&emsp;&emsp;";
for(let i = 0; i < aboutCode.length; i++){
  aboutCode[i].style.color = titles[i].color;
  aboutCode[i].innerHTML = `${indent}${aboutCode[i].innerHTML}`;
}