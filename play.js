const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting...');
const connection = connect();

// Set up user input via stdin
setupInput(connection);
