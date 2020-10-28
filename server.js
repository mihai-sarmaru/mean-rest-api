const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');

dotEnv.config();

const app = express();

// db connection
dbConnection();

// cors - access api from different domains
app.use(cors());

// request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routers
app.use('/api/v1/product', require('./routes/productRoutes'));

app.get('/', (req, res, next) => {
    res.send('Hello from Node Server.');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

// error handler middleware
app.use(function (err, req, res, next) {
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
});