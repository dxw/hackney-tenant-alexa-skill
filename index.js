const alexa = require("alexa-app");

const app = new alexa.app("hackney-tenant");

app.launch((_req, res) => {
  res.say("OK");
});

exports.handler = app.lambda();
