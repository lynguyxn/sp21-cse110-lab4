function printSum() {
  debugger
  let num1 = Number("1");
  let num2 = Number("2");
  console.log("Sum: " + calculateSum(num1, num2));
}

function calculateSum(num1, num2) {
  let result = num1 + num2
  return result
}

printSum();