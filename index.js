const alexa = require("alexa-app");
const axios = require("axios");

const app = new alexa.app("hackney-tenant");

app.launch(async (_req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  res.say(response.data.name);
});

exports.handler = app.lambda();
