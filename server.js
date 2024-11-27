const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let messages = []; // Temporary in-memory storage

// Endpoint to get all messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// Endpoint to add a new message
app.post('/messages', (req, res) => {
    const { username, message } = req.body;
    messages.push({ username, message });
    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
