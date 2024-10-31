// Import the 'fs ' module to interact with the file system
const fs = require('fs');
// Read the first file asynchronously
fs.readFile('file1.txt', 'utf8', (err, data1) => {
    // Check for errors
    if (err) {
        console.error(err);
        return;
    }
    // Log the contents of the first file
    console.log(data1);
    // Read the second file asynchronously
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        // Check for errors
        if (err) {
            console.error(err);
            return;
        }
        // Log the contents of the second file
        console.log(data2);
        // Read the third file asynchronously
        fs.readFile('file3.txt', 'utf8', (err, data3) => {
            // Check for errors
            if (err) {
                console.error(err);
                return;
            }
            // Log the contents of the third file
            console.log(data3);
        });
    });
});// ran and read files 1 2 and 3, displaying the text content in three separate lines, in 123 order