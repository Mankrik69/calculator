function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b)
    }
}

let firstNumber = "";
let operator = "";
let secondNumber = "";
const display = document.querySelector("#display");

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    })
});

const operations = document.querySelectorAll(".operation");
operations.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber) {
            secondNumber = Number(display.textContent);
            result = operate(operator, firstNumber, secondNumber);
            firstNumber = result;
            secondNumber = "";
            operator = button.textContent;
            display.textContent = "";
        } else {
            firstNumber = Number(display.textContent);
            operator = button.textContent;
            display.textContent = "";
        }
    })
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    secondNumber = Number(display.textContent);

    if (secondNumber === 0) {
        display.textContent = "You can't divide by zero";
        return;
    }

    let result = operate(operator, firstNumber, secondNumber);
    display.textContent = Number(result.toFixed(4));
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operation = "";
    display.textContent = "";
})