const http = require('http')

const PORT = process.argv[2]

if(!PORT){
    console.log('usage : node ex01.js <PORT>')
    process.exit(0)
}

const server = http.createServer((_,res) =>{
    res.write('<h1>Hello World!</h1>')
    res.end()
})

server.listen(PORT, () =>{
    console.log(`Server strated at http://localhost:${PORT}`)
})