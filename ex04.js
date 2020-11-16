const http = require('http')
const fs = require('fs');
const url = require('url');

const PORT = process.argv[2]
var content

if(!PORT){
    console.log('usage : node ex01.js <PORT>')
    process.exit(0)
}


const server = http.createServer((req,res) => {
    res.setHeader("Content-Type","text/html")
    const queryObject = url.parse(req.url,true).query;
    
    var array = Object.keys(queryObject)
    .map(function(key) {
        return queryObject[key];
    });

    console.log("My request dump : \n",)
    console.log("There are",array.length,"query parameters")

    for (const [key, value] of Object.entries(queryObject)) {
        console.log(`${key}: ${value}`);
      }
      res.write("done")
      
})


server.listen(PORT, () =>{
    console.log(`Server strated at http://localhost:${PORT}`)
})


