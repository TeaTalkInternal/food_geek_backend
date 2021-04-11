const utility = require("../utils/utility.js");
require('dotenv').config();
const user_auth = require("../utils/user_auth.js");
const dbPool = require('../utils/database.js');

const express = require('express');
const Router = express.Router();

/*
 * Add Category
 */

//Router.post('/add-category', user_auth.checkAccessTokenValidity, (req, res, next) => {
Router.post('/add-category', (req, res, next) => {
    return utility.showSuccessResponseWithMessage(res, 201, "Sucessfully added category.");
});

//Router.post('/category', user_auth.checkAccessTokenValidity, async (req, res, next) => {
Router.post('/category', async (req, res, next) => {
    try {
        const sql = "SELECT * FROM `product_types`;"
        const [rows, fieldsData] = await dbPool.query(sql);
        if (rows.length < 0) {
            utility.showErrorResponseWithMessage(res, 401, 'Failed to fetch Categories.')
        }
        const product_type_id = rows[0].product_type_id;
        const product_type = rows[0].product_type;
        const product_description = rows[0].description;

        const products = {
            "message": "Sucessfully fetched categories",
            "product_type_id": product_type_id,
            "product_type": product_type,
            "description": product_description
        };
        return utility.showSuccessResponseWithJson(res, 201, products);
    } catch (error) {
        return utility.showErrorResponseWithMessage(res, 401, 'Failed to fetch Categories.')

    }
});

module.exports = Router;