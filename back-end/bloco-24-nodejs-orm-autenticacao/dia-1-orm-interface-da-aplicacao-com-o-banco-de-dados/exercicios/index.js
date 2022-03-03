const bodyParser = require('body-parser');
const express = require('express');
const router = require('./router/routes');

const app = express();
app.use(bodyParser.json());

app.use('/books', router);

app.listen(3333, () => console.log('OUVINDO NA PORTA 3333'));