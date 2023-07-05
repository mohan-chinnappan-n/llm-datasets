const fs = require('fs');
const { Parser } = require('json2csv');

// Path to your JSONL file
const jsonlFilePath = process.argv[2];
// Path to output CSV file
const csvFilePath = `${jsonlFilePath}.csv`;

// Read the JSONL file
fs.readFile(jsonlFilePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading JSONL file:', err);
    return;
  }

  // Parse the JSONL data into an array of JSON objects
  const jsonObjects = data.split('\n').filter(line => line.trim() !== '').map(JSON.parse);

  // Convert JSON objects to CSV
  const parser = new Parser();
  const csvData = parser.parse(jsonObjects);

  // Write the CSV data to a file
  fs.writeFile(csvFilePath, csvData, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing CSV file:', err);
      return;
    }

    console.log('CSV file created successfully.');
  });
});

