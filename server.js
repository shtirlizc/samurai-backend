const http = require('http');

let requestCount = 0;

const server = http.createServer((request, response) => {
    requestCount++;

    switch (request.url) {
        case '/':
        case '/courses':
            response.write('Courses');
            break;
        case '/students':
            response.write('Students');
            break;
        default:
            response.write('404 - not found');
            break;
    }
    response.write(` IT-KAMASUTRA - ${requestCount}`);
    response.end();
});

server.listen(3003);