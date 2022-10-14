const { Readable, Writable } = require('stream');

const readableStream = new Readable({
    objectMode: true,
    highWaterMark: 2,
    read() {}
});

// const writeStream = new Writable({
//     write() {}
// });

readableStream.on('data', (chunk) => {
    console.log('data: ', chunk);
    // writeStream.write(chunk)
})

console.log(readableStream.push({
    name: 'Shivam'
}))


// writeStream.write('hello')


