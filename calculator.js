// Selector
let output = document.querySelector(".output");
let result = document.querySelector(".result");
let buttons = document.querySelectorAll("button");

function ouvir(button){
    button.addEventListener("click", calculate);
} 

// Eventlistener 
buttons.forEach(ouvir);

buttons.forEach(function ouvir(button){
    button.addEventListener("click", calculate);
});

function calculate() {
    
}