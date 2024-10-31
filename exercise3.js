// Import the 'http ' module to create an HTTP server
const http = require('http');
// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set a timeout of 2000 milliseconds (2 seconds )
    setTimeout(() => {
        res.statusCode = 200; // Set the status code to 200 (OK)
        res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
        res.end('Hello, world!\n'); // Send the response 'Hello, world!' and end the response
    }, 2000);
});
// Define the port number to listen on
const port = 3000;
server.listen(port, () => {
    // Start the server and listen on the specified port
    console.log(` Server running at http://localhost:${port}/`); // Log a message indicating the server is running
}); // ran a webpage that said hello world running on localhost:3000