// main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// App setup
// middleware in express
// morgan is a logger
app.use(morgan('combined'));
// any req is parsed as json
app.use(bodyParser.json({ type: '*/*' }));

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
