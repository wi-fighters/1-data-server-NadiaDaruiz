const express = require('express');
const port = process.env.PORT || 3000;
const Route = require('./Router/route');
const server = express();
const path = require('path');


server.use(express.json());
server.use('/', Route);
server.use(express.static(path.resolve(__dirname, 'views')))

server.listen(port, () => console.log('Server started in port:', port))


