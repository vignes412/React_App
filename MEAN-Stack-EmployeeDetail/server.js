const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var Database = require('./server/database/db');

var mongoose = require('mongoose');
const app = express();


//Mongoose Configuration
console.log(Database.url)
mongoose.connect(Database.url,(err,database)=>{
if(err){
  console.log(err);
}
else{
  console.log("Database is Connected");
}
});



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));



// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

require('./server/route')(app);