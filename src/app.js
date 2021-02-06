const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/' , (req,res) => {
    res.send('home page express');
});

app.get('/about', (req, res) => {
    res.send('about page express');
});

app.listen(port);