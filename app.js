const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("This is my Express App!!");
});

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});
