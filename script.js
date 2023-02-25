let result = document.getElementById('result');

function insertValue(value) {
  result.value += value;
}  //adding value

function clearResult() {
  result.value = '';
}  //clear

function backspace() {
  result.value = result.value.slice(0, -1);
}  //cut

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert('Invalid expression');
  }
}

