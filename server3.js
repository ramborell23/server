


const http = require('http');
const fs = require('fs');
const template = require('./template.js')

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHeader(200, { 'Content-Type': 'text/html' })
    res.write(template())
    res.end()

}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})


