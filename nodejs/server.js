const express = require('express');
const mothership = require('mothership-client');
const config = mothership.init({
    key: process.env.MOTHERSHIP_ENV_KEY || '<replace with your key>'
});

const app = express();

app.set('port', process.env.PORT || config.port || 3679);

app.get('/hello', (req, res) => {
    let name = config.name || 'world';
    res.send(`Hello, ${name}!`);
});

app.listen(app.get('port'), function() {
    console.log(`Server listening on port '${app.get('port')}'.`);
});