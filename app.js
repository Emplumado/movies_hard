const http = require('http');
const homePage = require('./src/homePage');


http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    // Route System
    if(req.url=='/'){
        (res.end(homePage));
    };
	// ¿?
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));

