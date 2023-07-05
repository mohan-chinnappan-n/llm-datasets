const fs = require('fs');
const readline = require('readline');

// Path to your JSONL file
const filePath = process.argv[2];
console.log(`Reading ${filePath}...`)
// Create a readable stream from the file
const fileStream = fs.createReadStream(filePath);

// Create a readline interface
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

// Read line by line
rl.on('line', (line) => {
  // Parse the JSON from each line
  const json = JSON.parse(line);

  // Process the JSON object
  console.log(json);
});

// Handle the end of the file
rl.on('close', () => {
  console.log('Finished reading the file.');
});

