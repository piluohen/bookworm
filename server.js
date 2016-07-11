const   express = require('express'),
        bodyParser = require('body-parser'),
        db = require('./db'),
        app = express()

app.use(express.static('www'))

app.listen(3000, err => console.log('正在运行...'))