/* eslint-disable no-unused-vars */

const services = require('../services/calculatorService');

const index = (request, h) => {
  return services.index();
};

const calculator = (request, h) => {
  const { operator, num1, num2 } = request.payload;
  // console.log(operator, num1, num2);
  return services.calculator(operator, num1, num2);
};

module.exports = {
  index,
  calculator
};