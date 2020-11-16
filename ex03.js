const http = require('http')
const fs = require('fs');
const PORT = process.argv[2]
var content
if(!PORT){
    console.log('usage : node ex01.js <PORT>')
    process.exit(0)
}

const server = http.createServer((req,res) => {
    res.setHeader("Content-Type","text/html")

    if(req.method === 'GET'){
        fs.readFile('index.html', 'utf8', function(err, data) {
            content = data;
            console.log(content);
        });
    }
    else if (req.method === 'POST'){
        fs.readFile('index.html', 'utf8', function(err, data) {
            content = data;
            console.log(content);
        });
    }

    res.end()
})


server.listen(PORT, () =>{
    console.log(`Server strated at http://localhost:${PORT}`)
})