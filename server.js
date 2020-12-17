/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-17 03:38:49
 * @modify date 2020-12-17 03:38:59
 * @desc [description]
 */

 
const app = require('./app');
const http = require('http');

// Define the PORT 
const PORT = 3000 || process.env.PORT;

// Create the server
const server = http.createServer(app);

// Listen to the server
server.listen(PORT, () => {
    console.log(`Server is running at PORT :- ${PORT}.`);
})