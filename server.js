const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/test', (req, res) => {
    res.send('server setup');
});

app.listen(5000, _ => {
    console.log('server running on port 5000');
    
});
