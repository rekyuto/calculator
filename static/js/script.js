// Declare button variables

const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const decimalButton = document.querySelector("#decimal");
const equalButton = document.querySelector("#equals");
const backspace = document.querySelector("#backspace");
const resetButton = document.querySelector("#c");

// Declare variables for calculating

let a = null;
let b = null;
let operator = null;
let currentNumber = "";

// Created functions for each operator

function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

// Created a function that does the actual calculation

function operate(a, operator, b){
    if (operator === "+"){
        return add(a, b);
    } else if (operator === "−"){
        return subtract(a, b);
    } else if (operator === "×"){
        return multiply(a, b);
    } else if (operator === "÷"){
        if (b === 0){
            return "WTF!!!!!!!!!!!!"
        } else {
            return divide(a, b);
        }
    }
};

// Resets every value

function clear() {
    a = null;
    b = null;
    operator = null;
    currentNumber = "";
    display.textContent = "0";
};

// Adds the relevant values for each number and operator to the display

numberButtons.forEach((number) => {
    number.addEventListener("click", () => {
        currentNumber += number.textContent;
        display.textContent = currentNumber;
    });
});

operatorButtons.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        if (a == null) {
            a = currentNumber;
            operator = symbol.textContent;
            currentNumber = "";
        } else if (b === null) {
            b = currentNumber;
            currentNumber = operate(+a, operator, +b);
            display.textContent = currentNumber;
            a = currentNumber;
            b = null;
            operator = symbol.textContent;
            currentNumber = "";
        }
    });
});

// Adds one decimal to a number

decimalButton.addEventListener("click", () => {
    if (!currentNumber.includes(".")) {
        currentNumber += ".";
        display.textContent = currentNumber;
    }
});

// Deletes the last number inputted before reaching 0

backspace.addEventListener("click", () =>{
    if (currentNumber.length > 1) {
        currentNumber = currentNumber.substring(0, currentNumber.length - 1);
        display.textContent = currentNumber;
    } else {
        currentNumber = 0;
        display.textContent = currentNumber;
    }
});

// Finalizes the calculation

equalButton.addEventListener("click", () => {
    display.textContent = operate(+a, operator, +currentNumber);
});

// Clears the display

resetButton.addEventListener("click", () => {
    clear();
});