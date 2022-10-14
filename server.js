const http = require('http')
const fs = require('fs')
const { Transform, pipeline } = require('stream')
const replaceWordProcessing = require('./replaceWordProcessor')
const upperCaseWordProcessing = require('./upperCaseWordProcessor')

const server = http.createServer((req, res) => {
    if (req.url !== '/') {
        return res.end();
    }
    
    // Downloading big file 
    const readableStream = fs.createReadStream('sample.txt')
    readableStream.pipe(res)

    // coping file 
    // const readStream = fs.createReadStream('sample.txt')
    // const writeStream = fs.createWriteStream('output.txt')

    // readStream.on('data', (chunk) => {
    //     writeStream.write(chunk)
    // });

    // String Processing
    const sampleFileStream = fs.createReadStream('sample.txt')
    const outputWritableStream = fs.createWriteStream('output.txt')

    pipeline(sampleFileStream, 
        replaceWordProcessing, 
        upperCaseWordProcessing, 
        outputWritableStream,
        (err) => {
            if (err) {
                console.log('Error handling here...', err);
            }
        })

    // sampleFileStream.on('data', (chunk) => {
    //     console.log('data received:', chunk.toString());

    //     // Process
    //     const finalString = chunk.toString().replace(/ipsum/gi, 'cool').toUpperCase()

    //     // Writable stream write
    //     outputWritableStream.write(finalString);

    // })

    // sampleFileStream
    // .pipe(replaceWordProcessing)
    // .on('error', (err) => {
    //     console.log(err);
    // })
    // .pipe(upperCaseWordProcessing)
    // .pipe(outputWritableStream);
    res.end()

})



const PORT = process.env.PORT || 5700;
server.listen(PORT, () => console.log((`Listening on port ${PORT}`)));