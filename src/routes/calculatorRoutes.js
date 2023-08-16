const controller = require('../controllers/calculatorController');
const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return controller.index(request, h);
    }
  },
  {
    method: 'POST',
    path: '/calculate',
    handler: (request, h) => {
      return controller.calculator(request, h);
    }
  }
];

module.exports = routes;