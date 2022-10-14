const { Transform } = require('stream')

const replaceWordProcessing = new Transform ({
    transform(chunk, encoding, callback) {
        const finalString = chunk.toString().replace(/ipsum/gi, 'cool')
        callback(null, finalString)
        // console.log('chunk', chunk.toString());
    }
})


module.exports = replaceWordProcessing