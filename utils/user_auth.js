const jwt = require('jsonwebtoken');
require('dotenv').config();
const utility = require('../utils/utility.js');


/*
 * Authorise Every request going in
 */
function checkAccessTokenValidity(req, res, next) {

    const bearerToken = req.headers['authorization'];
    if (!bearerToken) {
        return utility.showErrorResponseWithJson(res, 403, {
            'message': "Access Token invalid"
        });
    }
    const accessToken = bearerToken.split(" ")[1];
    if (!accessToken) {
        return utility.showErrorResponseWithJson(res, 403, {
            'message': "Access Token invalid"
        });
    }
    const accessTokenKey = process.env.ACCESS_TOKEN_SECRET;
    jwt.verify(accessToken, accessTokenKey, (err, body) => {

        if (!err) {
            next();
        } else {
            return utility.showErrorResponseWithJson(res, 403, {
                'message': "User is not Authenticated."
            });
        }
    });
}