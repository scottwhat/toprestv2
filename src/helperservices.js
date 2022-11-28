

function createPara(text) {
let newPara = document.createElement("p")
newPara.textContent = text
return newPara
}


// .button-nav.active {
//     border-bottom: 2px solid var(--font-color);
//   }
function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }
  


export {createPara}