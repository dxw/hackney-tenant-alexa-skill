require("dotenv-safe").config();

const alexa = require("alexa-app");
const axios = require("axios");

const app = new alexa.app("hackney-tenant");

app.launch(async (_req, res) => {
  const response = await axios.get(
    "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/production/ncc/api/UH/GetAllRentBreakdowns?tenancyAgreementId=000015%2F01",
    { headers: { "x-api-key": process.env.HACKNEY_API_KEY } }
  );

  res.say(response.data[0].description);
});

exports.handler = app.lambda();
