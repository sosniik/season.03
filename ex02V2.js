const http = require('http')
const PORT = process.argv[2]

if(!PORT){
    console.log('usage : node ex01.js <PORT>')
    process.exit(0)
}

const server = http.createServer((req,res) => {
    res.setHeader("Content-Type","text/html")

    if(req.method === 'GET'){
        res.write('Hello world!!\n')
    }
    else if (req.method === 'POST'){
        res.write('Heisenberg\n')
    }

    res.end()
})

server.listen(PORT, () =>{
    console.log(`Server strated at http://localhost:${PORT}`)
})