const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const getForm = require(path.join(__dirname, 'public','JS', 'API.js'));
const getInfo2 = require(path.join(__dirname, 'public','JS', 'API2.js'));

const hostname = '127.0.0.1';
const port = 5050;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'index.html'));
});

app.use('/save', getForm);
app.use('/getUserInfo', getInfo2);


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
