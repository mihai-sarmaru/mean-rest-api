const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config();

const app = express();

// request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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