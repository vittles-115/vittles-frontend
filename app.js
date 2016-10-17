var http = require('http');
var fs = require('fs');
url = require('url');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/restaurant.html', 'utf8');
    var message = 'Hello world...';
    html = html.replace('{Message}', message);
    var image = "<img src=\"blah.jpg\">";
    html = html.replace('{Image}', image);
    res.end(html);

}).listen(8888, '127.0.0.1')