const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AaR77VPRMk6QSxhD6q82Fzmz3nJ--B4BjVPHa2Rw0RMZybKg7LWwnDM__bUOtV4Aw30jYktgwsEwrKRZ",
  client_secret: "EOHWETpKTkIaLw0yesASI-B3x1phiHPif0701sh1DZ-C00s_K7WJ-vhVrZErqHZ4eN6gvPIeKfaHBx2V",
});

module.exports = paypal;