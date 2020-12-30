
const http=require('http')
const port=5000
const fs=require('fs')
const path=require('path')

const server=http.createServer((req,res) => {


    let filePath = path.join(__dirname,'', req.url === '/'? 'index.html':req.url)
    const ext = path.extname(filePath)

    if (!ext) {
        filePath+='.html'
    }
    console.log(filePath)

    fs.readFile(filePath,(err,content)=>{
        if (err) {
            fs.readFile(path.join(__dirname,'','err.html'), (err,data)=>{
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                    'Content-Type':'text/html'
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
            'Content-Type':'text/html'
            })
            res.end(content)
        }
    })
})


server.listen(port,function(error){
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ', port)
    }
})