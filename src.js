const express = require('express'); // Access to the express objects.
const app     = express();          // app is used to access HTTP methods.

app.use(express.json());            // JSON parser middleware.

const path    = require('path');    // A NodeJS module used to create paths.

/* Handling the root directory GET request */
app.get('/', (request, response) => {
  response.send("Hello World!");
});

/* Handling the request for a resource in a subdirectory */
app.get('/subdirectory/html_resource.html', (request, response) => {
  // First we need the path to the file.
  // __dirname is the current directory.
  const file_path = path.join(__dirname, '/subdirectory/html_resource.html');

  // Then we send the file to the user.
  response.sendFile(file_path);
});

const port = 9999;

/* Start the local server at port $port (9999) */
app.listen(port, () => {
  console.log(`Server started! Listening on port ${port}`)
});
