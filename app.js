const express = require('express')
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', (err) => {
        if(err){
            console.log(err);
        }
    });

    res.sendFile('')
});