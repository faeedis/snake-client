const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Invalid response status code:', response.statusCode);
    return;
  }

  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    const fileSize = Buffer.byteLength(body);
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
  });
});
