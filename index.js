function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return (x / y).toFixed(2);
}

let numberOne = null;
let operator = null;
let numberTwo = null;
let readyForNewNumber = false;

function operate(x, operator, y) {
  if (operator == "add") {
    return add(x, y);
  } else if (operator === "subtract") {
    return subtract(x, y);
  } else if (operator === "multiply") {
    return multiply(x, y);
  } else if (operator === "divide") {
    return divide(x, y);
  }
}

const clear = document.getElementById("clear");

const display = document.getElementById("display");

const digits = document.querySelectorAll("button.digit");

const operators = document.querySelectorAll("button.operator");

const equals = document.getElementById("equals");

clear.addEventListener("click", () => {
  display.textContent = 0;
});

digits.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (readyForNewNumber || display.textContent === "0") {
      display.textContent = button.id;
      readyForNewNumber = false;
    } else {
      display.textContent += button.id;
    }
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    numberOne = Number(display.textContent);
    console.log(numberOne);
    operator = button.id;
    console.log(operator);
    readyForNewNumber = true;
  });
});

equals.addEventListener("click", () => {
  numberTwo = Number(display.textContent);
  console.log(numberOne);
  console.log(numberTwo);
  console.log(operator);
  display.textContent = operate(numberOne, operator, numberTwo);
  readyForNewNumber = true;
});
