// Get the DOM button element.
const get_request_button = document.getElementById("getRequestButton");
const post_request_button = document.getElementById("postRequestButton");

get_request_button.textContent = "GET REQUEST";
post_request_button.textContent = "POST REQUEST";

// Perform the HTTP GET request whenever the user clicks the button.
get_request_button.onclick = () => {
  const server_url = "http://localhost:9999/server_request";

  const request_options = {
    method: 'GET'
  };

  fetch(server_url, request_options)
    .then(response => response.json())
    .then(data => {
      // Create a new header element to display server data.
      const text_message = document.createElement('h1');

      // Server will respond with a JSON object with a text parameter
      // (check the server code!).
      text_message.textContent = data.text;

      document.body.appendChild(text_message);
    });
};

// Perform the HTTP POST request whenever the user clicks the button.
post_request_button.onclick = () => {
  const server_url = "http://localhost:9999/server_request";

  const client_data = {
    name: 'Bob',
    age: '32'
  };
  const request_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(client_data)
  };

  fetch(server_url, request_options);
};