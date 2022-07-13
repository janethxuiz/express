const express = require('express')
const app = express();
const PORT = 3000;
const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
    res.send('Hello its me')
})

app.listen(PORT, () => console.log('Server is listening on port: ', PORTn))