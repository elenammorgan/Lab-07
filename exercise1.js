const fs = require('fs'); // Import the 'fs ' module to interact with the file system
fs.readFile('sample.txt','utf8',(err, data) => {
    if(err) {
        console.error(err); // Log an error if one occurs
        return;
    }
console.log(data); // Log the contents of the file
}); // after running this, the text entered in the sample.txt file is displayed in the debug console on VS code