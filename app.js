class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  delete() {}
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    this.currentOperand = this.currentOperand + number;
  }
  chooseOperation(operation) {
		if(this.currentOperand === ''){
			return;
		}
		if(this.previousOperand !== ''){
			this.compute();
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = '';
	}
  compute() {}
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationsButton = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equal]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', button => {
	calculator.compute();
	calculator.updateDisplay();
})