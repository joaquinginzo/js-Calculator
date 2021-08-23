
const screen = document.querySelector(".calculator__screen"); 
const numButtons = document.querySelectorAll(".number__btn"); 
const opButtons = document.querySelectorAll(".operator__btn")
const clear = document.querySelector("#clear");
const plusMinus = document.querySelector("#plusminus");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal")
let operand = ""

equal.addEventListener("click", event => {
    let result = eval(operand + screen.textContent);
    screen.textContent = result;    
});

clear.addEventListener("click", event =>{
    screen.textContent = ""
    operand = ""
});

numButtons.forEach(btn => {
    btn.addEventListener('click', event => {
        screen.textContent += btn.textContent
    })
});

opButtons.forEach(btn => {
    btn.addEventListener('click', event => {
        operand = Number (screen.textContent) + (btn.textContent);
        screen.textContent = ""
    })
});













//----------------------------------------------
// To fix --> To check all chained operations
//        --> Module, decimal.
//        --> Catch user's errors.  


