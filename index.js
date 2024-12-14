const express = require('express');
const app = express();

app.get('/test/', function(req, res) {
    res.send('Serwer działa na porcie');
});

app.listen(3000, function() {
    console.log('Serwer słucha .. http://localhost:3000');
});

