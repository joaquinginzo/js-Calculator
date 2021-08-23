"use strict";

var screen = document.querySelector(".calculator__screen");
var numButtons = document.querySelectorAll(".number__btn");
var opButtons = document.querySelectorAll(".operator__btn");
var clear = document.querySelector("#clear");
var plusMinus = document.querySelector("#plusminus");
var decimal = document.querySelector("#decimal");
var equal = document.querySelector("#equal");
var operand = "";
equal.addEventListener("click", function (event) {
  var result = eval(operand + screen.textContent);
  screen.textContent = result;
});
clear.addEventListener("click", function (event) {
  screen.textContent = "";
  operand = "";
});
numButtons.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    screen.textContent += btn.textContent;
  });
});
opButtons.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    operand = Number(screen.textContent) + btn.textContent;
    screen.textContent = "";
  });
}); //----------------------------------------------
// To fix --> To check all chained operations
//        --> Module, decimal.
//        --> Catch user's errors.