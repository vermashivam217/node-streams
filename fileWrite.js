const fs = require('fs')

const writableStream = fs.createWriteStream('log.txt')
process.stdin.pipe(writableStream)


// How console.log() works.

// const readableStream = fs.createReadStream('log.txt')

// readableStream.pipe(process.stdout)