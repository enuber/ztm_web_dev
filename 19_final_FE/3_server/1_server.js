// http is a module that is fairly bare bones. This is a way to use it but, Express.js is more robust and popular
const http = require('http');

//create the server with .createServer()
const server = http.createServer((request, response) => {
  // these are some of the things you can grab back using the request
  console.log('headers', request.headers);
  console.log('method', request.method);
  console.log('url', request.url);
  //tells you what the content is going to be, in our case will be text/html
  // response.setHeader('Content-Type', 'text/html');
  // response.end('<h1>Hello</h1>');

  //here we are sending info via JSON. so on the frontend when JSON.parse() would be used to read the JSON data.
  const user = {
    name: 'John',
    hobby: 'Skating',
  };
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(user));
});

//tells you what localhost you can view your page on. can be any you want
server.listen(3000);
