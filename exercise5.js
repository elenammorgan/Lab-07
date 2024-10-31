const fs = require('fs'); // Import the 'fs ' module to interact with the file system
const EventEmitter = require('events'); // Import the 'events ' module to use EventEmitter
const eventEmitter = new EventEmitter(); // Create a new EventEmitter instance
// Set up an event listener for the 'fileRead ' event
eventEmitter.on('fileRead', (data) => {
    console.log('File content:', data); // Log the file content when the event is emitted
});
// Read the file 'sample . txt ' asynchronously
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if(err) {
        console.error(err); // Log an error if one occurs
        return;
    }
eventEmitter.emit('fileRead', data); // Emit the 'fileRead ' event with the file content
}); // printed the text in sample.txt again in the debug console, this time using the event emitter