const express = require ("express")
const app = express()

const http = require('http')
const server = http.createServer(app)
var io = require('socket.io')(server, {
    origins: ["http://localhost:3000"],
    handlePreflightRequest: (req, res) => {
        res.writeHead(200, {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Methods": "GET,POST",
          "Access-Control-Allow-Headers": "my-custom-header",
          "Access-Control-Allow-Credentials": true
        });
        res.end();
    }
});
global.io = io;

require('./utils/express')(app)
require('./routes')(app)

require('./socket.js')(io,{ origins: '*:*'});

const PORT = process.env.PORT || 5000
const IP = process.env.IP || '0.0.0.0'

// Start server
server.listen( PORT , function () {
    console.log(`Express server listening on port ${PORT}`)
})
  
// Expose app
exports = module.exports = app