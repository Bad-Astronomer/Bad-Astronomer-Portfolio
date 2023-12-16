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
  createCross("top-left", element);
  createCross("bottom-right", element);
}
function crossReverse(element){
  createCross("top-right", element);
  createCross("bottom-left", element);
}

document.querySelectorAll(".cross-section").forEach((section) => {
  cross(section); // add cross to all sections
})
document.querySelectorAll(".cross-section-reverse").forEach((section) => {
  crossReverse(section); // add cross to all sections
})


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
document.querySelector(":root").style.setProperty("--highlight-color", titles[0].color);


setInterval(() => {
  titleIndex = (titleIndex + 1) % titles.length;
  let text = titles[titleIndex];
  
  document.querySelector(":root").style.setProperty("--highlight-color", titles[(titleIndex + 1) % titles.length].color);

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
    addI(aboutCode[titleIndex]);
  }, 10);

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

let editorPointer = document.createElement("span");
editorPointer.classList.add("editor-pointer");
editorPointer.innerHTML = "&nbsp;|";

function addI(element){
  editorPointer.remove();
  element.appendChild(editorPointer);
}
addI(aboutCode[0]);

// Bottom Vignette
const bottomVignette = document.getElementById("bottom-vignette");
window.addEventListener("scroll", (event)=>{
  if(this.scrollY >= 80){
    bottomVignette.style.opacity = 0.2;
  }
  else{
    bottomVignette.style.opacity = 1;
  }
});
// Bottom Vignette


// Projects

// Animate on scroll
const projects = document.getElementsByClassName("project-container");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if(entry.isIntersecting){
          entry.target.classList.add("show");
      }
      else{
          entry.target.classList.remove("show");
      }
  }
  )
})
for (let i = 0; i < projects.length; i++){
  observer.observe(projects[i]);
  let divider = document.createElement("div");
  if(i%2){
    divider.classList.add("project-divider-right");
  }
  else{
    divider.classList.add("project-divider-left");
  }
  projects[i].appendChild(divider);

}
// remove bottom border from last project
projects[projects.length - 1].style.borderBottom = "none";

// Projects