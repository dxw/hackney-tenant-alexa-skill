require("dotenv-safe").config();

const alexa = require("alexa-app");
const axios = require("axios");

const app = new alexa.app("hackney-tenant");

app.launch(async (_req, res) => {
  const response = await axios.get(
    "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/production/ncc/api/UH/GetAllRentBreakdowns?tenancyAgreementId=000015%2F01",
    {
      headers: { "x-api-key": process.env.HACKNEY_API_KEY },
      timeout: 5000
    }
  );

  res.say("Your balance is as follows.");

  for (const rent of response.data) {
    res.say(`${rent.description.trim()}: £${rent.value}.`);
  }
});

app.error = (err, _req, res) => {
  console.error(err);

  res.say("Oops. Something went wrong. Please try again.");
};

module.exports.handler = app.lambda();
