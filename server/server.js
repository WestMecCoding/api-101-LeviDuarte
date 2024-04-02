const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

app.get('/leo-juan-marquez', (req, res) => {
    res.send("Come back with enough gems link")
})