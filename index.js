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
const displayInput = document.querySelector("#input");
const displayOutput = document.querySelector("#output");

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        displayInput.textContent += button.textContent;
    })
});

const operations = document.querySelectorAll(".operation");
operations.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber) {
            secondNumber = Number(displayInput.textContent);
            result = operate(operator, firstNumber, secondNumber);
            firstNumber = result;
            secondNumber = "";
            operator = button.textContent;
            displayInput.textContent = "";
            displayOutput.textContent = `${Number(firstNumber.toFixed(2))} ${operator}`;
        } else {
            firstNumber = Number(displayInput.textContent);
            operator = button.textContent;
            displayInput.textContent = "";
            displayOutput.textContent = `${firstNumber} ${operator}`;
        }
    })
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    secondNumber = Number(displayInput.textContent);

    if (secondNumber === 0) {
        displayInput.textContent = "You can't divide by zero";
        displayOutput.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
        return;
    }

    let result = operate(operator, firstNumber, secondNumber);
    displayOutput.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    firstNumber = "";
    displayInput.textContent = Number(result.toFixed(2));
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    firstNumber = "";
    operation = "";
    displayInput.textContent = "";
    displayOutput.textContent = "";
})