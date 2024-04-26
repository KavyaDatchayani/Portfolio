// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    mobileNumber: process.env.MOBILE_NUMBER,
    port: process.env.PORT
};