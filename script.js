let currentInput = "";
var num1;
var num2;
var operator ;
const display = document.getElementById("display");
var buttons = document.querySelector("#buttons");
var ACbtn = document.querySelector("#ACbtn");
var waitForNum2 = false;

function toDisplay(value) {
    if (value === "AC") {
        currentInput = "";
        num1 = null;
        num2 = null;
        operator = null;
        waitForNum2 = false;
    }
    else if (value === "%") {
        currentInput = (Number(currentInput) / 100).toString();
    } 
    else if (value === "+/-") {
        currentInput = (Number(currentInput) * -1).toString();
    } 
    else if (value === ".") {
        if (!currentInput.includes(value)) {
            currentInput += value;
        }
    } 
    else if (value === "+") {
        operator = "+";
        num1 = Number(currentInput);
        waitForNum2 = true;;
    } 
    else if (value === "-") {
        operator = "-";
        num1 = Number(currentInput);
        waitForNum2 = true;
    } 
    else if (value === "x") {
        operator = "x";
        num1 = Number(currentInput);
        waitForNum2 = true;
    } 
    else if (value === "÷") {
        operator = "÷";
        num1 = Number(currentInput);
        waitForNum2 = true;
    } 
    else if (value === "=") {
        num2 = Number(currentInput);
        currentInput = operate(num1, num2, operator);
        waitForNum2 = false;
    }
    else {
        if (waitForNum2) {
            currentInput = value;
            waitForNum2 = false;
        } else {
            currentInput += value;
        }
    }
    display.value = currentInput;

    if (currentInput === "") {
        ACbtn.textContent = "AC";
    } else {
        ACbtn.textContent = "C";
    }
}


function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return substract(num1, num2);
        case "÷":
            if (num1 === 0 || num2 === 0 || (num1 && num2) === 0) {
                return 0;
            } else {
                return divide(num1, num2);
            }
        case "x":
            return multiply(num1, num2);
    }
}
