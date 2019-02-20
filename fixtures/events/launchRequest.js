module.exports = {
  version: "1.0",
  session: {
    new: true,
    sessionId: "amzn1.echo-api.session.test",
    application: {
      applicationId: "amzn1.ask.skill.test"
    },
    user: {
      userId: "amzn1.ask.account.test"
    }
  },
  context: {
    System: {
      application: {
        applicationId: "amzn1.ask.skill.test"
      },
      user: {
        userId: "amzn1.ask.account.test"
      },
      device: {
        deviceId: "amzn1.ask.device.test",
        supportedInterfaces: {}
      },
      apiEndpoint: "https://api.amazonalexa.com",
      apiAccessToken: "test"
    }
  },
  request: {
    type: "LaunchRequest",
    requestId: "amzn1.echo-api.request.test",
    timestamp: new Date().toISOString(),
    locale: "en-GB"
  }
};
