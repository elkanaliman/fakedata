const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
require('dotenv').config
const port = process.env.PORT
const {readdirSync} = require('fs')

readdirSync ('./routes').map((file) =>app.use('/',require('./routes/' + file)))


app.get('/', function (req, res) {
  res.send('Hello World')
});


app.listen(8000)

