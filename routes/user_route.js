const express = require('express');
require('dotenv/config');
const Router = express.Router();
const utility = require('../utils/utility.js');


/*
 * SEND-OTP
 */

Router.post('/send-otp', async (req, res, next) => {
    const user = req.body;
    const phone = user['phone_number'];
    if (!phone) {
        utility.showErrorResponseWithMessage(res, 401, "Please enter a vaild phonenumber.");
        return;
    }
    //Create an OTP and send message to phone.
    const uniqueOTP = Math.floor(1000 + Math.random() * 9000);

});

module.exports = Router;