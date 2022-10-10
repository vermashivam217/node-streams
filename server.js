const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url !== '/') {
        return res.end();
    }
    
    // Downloading big file 
    const readableStream = fs.createReadStream('sample.txt')
    readableStream.pipe(res)

    // coping file 
    const readStream = fs.createReadStream('sample.txt')
    const writeStream = fs.createWriteStream('output.txt')

    readStream.on('data', (chunk) => {
        writeStream.write(chunk)
    });

    res.end()

})



const PORT = process.env.PORT || 5700;
server.listen(PORT, () => console.log((`Listening on port ${PORT}`)));