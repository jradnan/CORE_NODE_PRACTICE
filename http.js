const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello programmers')
        res.write(' how are you?')
        res.end()
    } else if (req.url === '/about') {
        res.write('this is about us page')
        res.end()
    }
    else{
        res.write('Not found')
        res.end()
    }
});

server.listen(5000);
console.log('server is running at 5000');