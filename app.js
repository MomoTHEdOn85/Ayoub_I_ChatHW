/*const http = require('http');  

const hostname = '127.0.0.1';  
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World. Jag jao and then mrjao');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

const express = require('express');  //import the express package 
const app = express(); // create an express app 
const http = require('http'); // import the Node server package
const server = http.createServer(app); // use our app file with the server

const port = process.env.PORT || 3000; //.env.PORT is the environment varibale Node

// this is a route handler -> listen for incoming requests and send back a response
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

// set up the server to listen for incoming connection at this port
server.listen(3000, () => {
  console.log(`listening on ${port}`);
});