const index = () => {
  return 'Hello World!';
};

const calculator = (operator, num1, num2) => {
  let result = 0;
  switch (operator) {
  case 'add':
    result = parseInt(num1) + parseInt(num2);
    break;
  case 'subtract':
    result = parseInt(num1) - parseInt(num2);
    break;
  case 'multiply':
    result = parseInt(num1) * parseInt(num2);
    break;
  case 'divide':
    result = parseInt(num1) / parseInt(num2);
    break;
  default:
    result = 'Invalid operator';
  }
  return `Result: ${result}`;
};

module.exports = {
  index,
  calculator
};