const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const mysql = require('mysql2');
const category_route = require("./routes/category_route");
const user_route = require("./routes/user_route");

require('dotenv/config');

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(helmet());

//Redirect request to respective classes

app.use('/category', category_route);
app.use('/user', user_route);
//Default route
app.use('/', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({
        'message': 'Invalid Access'
    });
});

app.listen(process.env.PORT || 3600, () => {
    console.log('Server Started');
});