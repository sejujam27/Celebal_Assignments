const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    const filePath = path.join(__dirname, 'files', url);

    if (method === 'GET') {
        // Read a file
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('File not found');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(data);
            }
        });
    } else if (method === 'POST') {
        // Create a file
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            fs.writeFile(filePath, body, err => {
                if (err) {
                    res.statusCode = 500;
                    res.end('Error creating file');
                } else {
                    res.statusCode = 201;
                    res.end('File created');
                }
            });
        });
    } else if (method === 'DELETE') {
        // Delete a file
        fs.unlink(filePath, err => {
            if (err) {
                res.statusCode = 404;
                res.end('File not found');
            } else {
                res.statusCode = 200;
                res.end('File deleted');
            }
        });
    } else {
        res.statusCode = 405;
        res.end('Method not allowed');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
