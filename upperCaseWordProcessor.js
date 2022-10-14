const { Transform } = require('stream')

const upperCaseWordProcessing = new Transform ({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase())
    }
})


module.exports = upperCaseWordProcessing