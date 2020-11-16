const http = require('http')
const PORT = process.argv[2]

if(!PORT){
    console.log('usage : node ex01.js <PORT>')
    process.exit(0)
}

const server = http.createServer((req,res) => {
    res.setHeader("Content-Type","text/html")
    

    res.end()
})

server.listen(PORT, () =>{
    console.log(`Server strated at http://localhost:${PORT}\n`,
                "My request headers dump :\n",
                `localhost :${PORT}`)

})