let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); // Terminate the game when Ctrl+C is pressed
  }

  // Send movement commands or messages to the server based on user input
  if (key === 'w') {
    connection.write('Move: up'); // Send "Move: up" command
  }
  if (key === 'a') {
    connection.write('Move: left'); // Send "Move: left" command
  }
  if (key === 's') {
    connection.write('Move: down'); // Send "Move: down" command
  }
  if (key === 'd') {
    connection.write('Move: right'); // Send "Move: right" command
  }
  if (key === 'h') {
    connection.write('Say: Saed says hello'); // Send "Say: Saed says hello" command
  }
  if (key === 'b') {
    connection.write('Say: Saed says bye'); // Send "Say: Saed says bye" command
  }
};

module.exports = { setupInput };
