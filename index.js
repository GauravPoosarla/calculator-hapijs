const Hapi = require('@hapi/hapi');
require('dotenv').config();
const router = require('./src/routes/calculatorRoutes');

const init = async() => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost'
  });

  server.route(router);

  await server.start();
  console.log(`server running on ${process.env.PORT || 3000} port`);
};

init();