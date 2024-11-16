const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equals");
const backspace = document.querySelector("#backspace");
const resetButton = document.querySelector("#c");

let a = null;
let b = null;
let operator = null;
let currentNumber = "";

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

function clear() {
    a = null;
    b = null;
    operator = null;
    currentNumber = "";
    display.textContent = "0";
};

numberButtons.forEach((number) => {
    number.addEventListener("click", () => {
        currentNumber += number.textContent;
        display.textContent = currentNumber;
    });
});

resetButton.addEventListener("click", () => {
    clear();
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

equalButton.addEventListener("click", () => {
    display.textContent = operate(+a, operator, +currentNumber);
});