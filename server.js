


const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.listen(PORT);
console.log('GraphQL API Server up and running at localhost:' + PORT);
