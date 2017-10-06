const twilio = require('twilio');

const accountSid = 'AC3a79069e7973c44ccf9c03417efb8d3b';
const authToken = '3bb4300da467ea4e99cd307ce563642d';

module.exports = new twilio.Twilio(accountSid, authToken);