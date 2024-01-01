function multiply(a, b) {
  return a * b;
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}
function clicked(event) {
  console.log(Number(event.target.innerText));
  if (Number(event.target.innerText)) {
    document.getElementById("screen").value += Number(event.target.innerText);
  } else {
    document.getElementById("screen").value += event.target.innerText;
  }
}
function display() {
  return clicked();
}
function AC() {
  document.getElementById("screen").value = "";
}
function DEL() {
  var inputField = document.getElementById("screen");

  // Get the current value of the input field
  var currentValue = inputField.value;

  // Check if the input field is not empty
  if (currentValue.length > 0) {
    // Remove the last character
    var newValue = currentValue.substring(0, currentValue.length - 1);

    // Update the input field with the new value
    inputField.value = Number(newValue);
  }
}
function equalto() {
  document.getElementById("screen").value = eval(
    document.getElementById("screen").value
  );
}
function squareroot() {
  document.getElementById("screen").value =
    Number(document.getElementById("screen").value) ** (1 / 2);
}
function square() {
  document.getElementById("screen").value =
    Number(document.getElementById("screen").value) ** 2;
}
function reciprocal() {
  document.getElementById("screen").value =
    1 / Number(document.getElementById("screen").value);
}
