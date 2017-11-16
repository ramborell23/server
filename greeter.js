const http = require('http')
const url = require('url')
const port = 3000;

const url = require('url')
url.parse('/search?q=dogs')

const server = http.createServer((req,res) =>{
    res.statusCode = 200
    res.writeHead(200,{'Content-Type' : 'text/html'})  
    
    if(req.url === ''){

    }
    res.write("<p>Hello World</p>")
    res.end()
})


server.listen(port,( )=> {
    console.log(`Server running at http://localhost:${port}`)
})