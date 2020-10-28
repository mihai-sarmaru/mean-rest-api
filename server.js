const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});