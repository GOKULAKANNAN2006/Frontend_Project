const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

const operators = ["+", "-", "*", "/"];

buttons.forEach((button) => {
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

function logout() {
  var but = document.getElementById("btn");
  window.location.assign("index.html");
}

document.addEventListener("keydown", function (event) {
  let key = event.key;

  // Allow only calculator keys
  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "."
  ) {
    const lastChar = expression.slice(-1);

    // Prevent two operators together
    if (operators.includes(key) && operators.includes(lastChar)) {
      return;
    }

    // Prevent multiple decimal points
    if (key === ".") {
      let lastNumber = expression.split(/[+\-*/]/).pop();

      if (lastNumber.includes(".")) {
        return;
      }
    }

    expression += key;
    display.value = expression;
  }

  // Enter key (=)
  else if (key === "Enter") {
    if (expression === "") return;

    try {
      expression = eval(expression).toString();
      display.value = expression;
    } catch {
      display.value = "Error";
      expression = "";
    }
  }

  // Backspace
  else if (key === "Backspace") {
    expression = expression.slice(0, -1);
    display.value = expression;
  }

  // Escape = Clear
  else if (key === "Escape") {
    expression = "";
    display.value = "";
  }
});
