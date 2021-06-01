const express = require('express'); // Access to the express objects.
const app = express(); // app is used to access HTTP methods.

app.use(express.json()); // JSON parser middleware.

const serve_directory = __dirname + '/subdirectory';
app.use(express.static(serve_directory)); // Serve static files from subdirectory.

const path = require('path'); // A NodeJS module used to create paths.

/* Handling the root directory GET request */
app.get('/', (request, response) => {
  const file_path = path.join(__dirname, '/subdirectory/resource_with_js.html');

  response.sendFile(file_path);
});

/* Handling the request for a resource in a subdirectory */
app.get('/subdirectory/html_resource.html', (request, response) => {
  // First we need the path to the file.
  // __dirname is the current directory.
  const file_path = path.join(__dirname, '/subdirectory/html_resource.html');

  // Then we send the file to the user.
  response.sendFile(file_path);
});

/* Handling server requests from browser */
app.get('/server_request', (request, response) => {
  const res = {
    text: "Response for the GET request!"
  };

  response.json(res); // Client is anticipating a JSON object.
});

app.post('/server_request', (request, response) => {
  /* Client data is a JSON object with name and age */
  const client_data = request.body;

  console.log('received data!');
  console.log('name: ', client_data.name);
  console.log('age: ', client_data.age);

  /* Client is not requesting any data sent back */
  /* But we will send back a 200 OK */
  response.sendStatus(200);
});

const port = 9999;

/* Start the local server at port $port (9999) */
app.listen(port, () => {
  console.log(`Server started! Listening on port ${port}`)
});
