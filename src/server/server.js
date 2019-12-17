const express = require('express');
const path = require('path');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json()); //sets up req.body without needing additional middleware

module.exports = server;