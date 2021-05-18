const Hapi = require('@hapi/hapi');
const routes = require('./routes');

async function runServer() {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server bekerja pada ${server.info.uri}`);
}

runServer();
