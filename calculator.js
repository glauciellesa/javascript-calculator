// Selector
let output = document.querySelector(".output");
let result = document.querySelector(".result");
let keys = document.querySelectorAll("button");


// Eventlistener 

keys.forEach(button => {
    button.addEventListener("click", calculate);
});

function calculate() {
    let buttonText = this.innerText;
    if (buttonText === "AC") {
        output.innerText = " ";
        result.innerText = 0;
        return
    }
    if (buttonText === "DEL") {
        output.textContent = output.textContent.substr(0, output.textContent.length-1);
        return;
    }
    if (buttonText === "=") {
        result.innerText = eval(output.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "big 0.5s ease-in-out";
        result.style.animation = "forwards";
        output.style.animation = "forwards";
    }
    else {
        output.textContent += buttonText;
    }
}