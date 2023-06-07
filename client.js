const { IP, PORT } = require('./constants');

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Rest of the code...

  return conn;
};

// Rest of the code...
