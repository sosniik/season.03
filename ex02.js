const http = require('http')

const PORT = process.argv[2]

if(!PORT){
    console.log('usage : node ex01.js <PORT>')
    process.exit(0)
}

const server = http.createServer((_,res) =>{
    res.write('gft')
    res.end()
})

server.listen(PORT, () =>{
    console.log(`Server strated at http://localhost:${PORT}`)
    const req = http.request(`http://localhost:${PORT}`, res => {
        console.log(`statusCode: ${res.statusCode}`)
      
        res.on('data', d => {
          process.stdout.write("hello world")
        })
      })
      
      req.on('error', error => {
        console.error(error)
      })
      
      req.end()
})
