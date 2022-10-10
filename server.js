const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url !== '/') {
        return res.end();
    }

    console.log('request coming', req.url);

})



const PORT = process.env.PORT || 5700;
server.listen(PORT, () => console.log((`Listening on port ${PORT}`)));