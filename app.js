window.onload = function () {
    let num1 = null;
    let num2 = null;
    let operation = null;
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            if (value === "C") {
                screen.innerText = "";
                num1 = null;
                num2 = null;
                operation = null;
                return;
            }
            if (num1 === null) {
                num1 = value;
                screen.innerText = value;
            }
            else if (operation === null) {
                num1 += value;
                screen.innerText = num1;
            }
            else {
                if (num2 === null) {
                    num2 = value;
                }
                else {
                    num2 += value;
                }
                screen.innerText += num2;
            }
        });
    });

    const operationButtons = document.querySelectorAll(".operation");
    operationButtons.forEach(button => {
        button.addEventListener("click", function () {
            operation = this.getAttribute("data-value");
            screen.innerText += " " + operation + " ";
        })
    });

    document.getElementById("=").addEventListener("click", function () {
        if (num1 !== null && num2 !== null && operation !== null) {
            const num1value = parseFloat(num1);
            const num2value = parseFloat(num2);
            let result;
            switch (operation) {
                case "+":
                    result = num1value + num2value;
                    break;
                case "-":
                    result = num1value - num2value;
                    break;
                case "*":
                    result = num1value * num2value;
                    break;
                case "/":
                    result = num2value !== 0 ? num1value / num2value : "Cannot divide by zero!";
                    break;
                default:
                    result = "Invalid operation";
            }
            screen.innerText = result;
            num1 = null;
            num2 = null;
            operation = null;
        } else {
            screen.innerText = "Incomplete input!";
        }
    });
};