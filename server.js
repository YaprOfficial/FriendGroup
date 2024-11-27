const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let messages = [];  // Store messages in memory (you can replace this with a database)

// Endpoint to get messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// Endpoint to add a new message
app.post('/messages', (req, res) => {
    const { username, message } = req.body;
    messages.push({ username, message });
    res.status(201).send();
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
