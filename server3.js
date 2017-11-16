const http = require('http');
const fs = require('fs');

const port = 3000; 

fs.readFile('./index.html', function(err, html) {
    if (err){
        throw err  
    } ;
//    return (data.toString());
   http.createServer((req,res) =>{
      res.writeHeader(200,{'Content-Type' : 'text/html'})  
      res.write(html)
      res.end()
   
    }).listen(port,()=> {
        console.log(`Server running at http://localhost:${port}`)
    })
});


