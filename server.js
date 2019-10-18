const express = require('express');
const bodyParser = require('body-parser');

const server = express();


server.use(bodyParser.json());

server.get('/', (req, res) => {
	res.send("Hi");
	console.log("Started");
});

const port = 3000;

server.listen(port,() => {
    console.log("Server listening on " + port);
})