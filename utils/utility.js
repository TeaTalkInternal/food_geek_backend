/*
 *  Helper Methods
 */

function showErrorResponseWithMessage(res, statusCode, message) {
    res.setHeader('Content-Type', 'application/json');
    return res.status(statusCode).json({
        'message': message
    });
}

function showErrorResponseWithJson(res, statusCode, responseJson) {
    res.setHeader('Content-Type', 'application/json');
    return res.status(statusCode).json(responseJson);
}

function showSuccessResponseWithMessage(res, statusCode, message) {
    res.setHeader('Content-Type', 'application/json');
    return res.status(statusCode).json({
        'message': message
    });
}

function showSuccessResponseWithJson(res, statusCode, responseJson) {
    res.setHeader('Content-Type', 'application/json');
    return res.status(statusCode).json(responseJson);
}

module.exports = {
    showSuccessResponseWithJson: showSuccessResponseWithJson,
    showSuccessResponseWithMessage: showSuccessResponseWithMessage,
    showErrorResponseWithJson: showErrorResponseWithJson,
    showErrorResponseWithMessage: showErrorResponseWithMessage
}