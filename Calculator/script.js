const display = document.getElementById("display");

let firstNo = null;
let operator = null;
let isNewNo = true;

function updateDsply(val) {
  display.textContent = val;
}

function inputDigit(digit) {
  if (isNewNo) {
    updateDsply(digit);
    isNewNo = false;
  } else {
    updateDsply(display.textContent + digit);
  }
}

function handleOperator(op) {
  firstNo = parseFloat(display.textContent);
  operator = op;
  isNewNo = true;
}

function calculate() {
  if (firstNo === null || operator === null) return;

  const scndNo = parseFloat(display.textContent);
  let rez;
  if (operator === "+") rez = firstNo + scndNo;
  if (operator === "-") rez = firstNo - scndNo;
  if (operator === "*") rez = firstNo * scndNo;
  if (operator === "/") rez = firstNo / scndNo;
  updateDsply(rez);
  firstNo = null;
  operator = null;
  isNewNo = true;
}

function clrAll() {
  firstNo = null;
  operator = null;
  isNewNo = true;
  updateDsply("0");
}

document.querySelector(".buttons").addEventListener("click", function (eve) {
  if (eve.target.tagName !== "BUTTON") return;
  const value = eve.target.dataset.value;
  const action = eve.target.dataset.action;
  const operators = ["+", "-", "/", "*"];
  if (action === "clear") {
    clrAll();
  } else if (action === "equals") {
    calculate();
  } else if (operators.includes(value)) {
    handleOperator(value);
  } else {
    inputDigit(value);
  }
});
document.addEventListener("keydown", function (eve) {
  const key = eve.key;
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["+", "-", "*", "/"];
  highLighBtn(key);
  const handled = [
    "/",
    "*",
    "+",
    "-",
    "Enter",
    "=",
    "Escape",
    "Backspace",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
  ];
  if (handled.includes(key)) {
    eve.preventDefault();
  }
  if (key === "=" || key === "Enter") {
    calculate();
  } else if (key === "c" || key === "Escape") {
    clrAll();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (operators.includes(key)) {
    handleOperator(key);
  } else if (digits.includes(key) || key === ".") {
    inputDigit(key);
  }
});

function deleteLast() {
  const current = display.textContent;
  if (current <= 1) {
    updateDsply("0");
  } else {
    updateDsply(current.slice(0, -1));
  }
}

function highLighBtn(key) {
  const allBtns = document.querySelectorAll("button");
  allBtns.forEach(function (button) {
    if (button.dataset.value === key || button.dataset.action === key) {
      button.classList.add("key-pressed");
      setTimeout(function () {
        button.classList.remove("key-pressed");
      }, 200);
    }
  });
}
