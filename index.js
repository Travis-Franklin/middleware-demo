const http = require('http');
const express = require('express');
const app = express();
const PORT = 3000;
const server = http.createServer(app);
const morgan = require('morgan');
const logger = morgan('tiny');
const helmet = require('helmet');


app.use(logger);
app.use(helmet());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);

    next();
})

app.get('/', (req, res) => {
    console.log('<h1>Homepage</h1>');
    res.send('<h1>homepage</h1>');

});


server.listen(PORT, () => {
    console.log(`${PORT}`)
});