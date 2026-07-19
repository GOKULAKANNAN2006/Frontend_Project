const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

const operators = ["+", "-", "*", "/"];

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "C") {
            expression = "";
            display.value = "";
            return;
        }

        if (value === "=") {

            if (expression === "") return;

            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }

            return;
        }

        const lastChar = expression.slice(-1);

        // Prevent two operators together
        if (operators.includes(value) && operators.includes(lastChar)) {
            return;
        }

        // Prevent multiple decimal points in one number
        if (value === ".") {
            let lastNumber = expression.split(/[+\-*/]/).pop();

            if (lastNumber.includes(".")) {
                return;
            }
        }

        expression += value;
        display.value = expression;

    });

});


function logout(){
            var but=document.getElementById("btn");
            window.location.assign("index.html");
        }
