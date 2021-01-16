const express = require("express")
const app = express()
const port = 8000;
const cors = require("cors")


// app.use(cors());

// app.use(express.json(), express.urlencoded({extended: true})) //this is needed for handling post requests that use json


const server = app.listen(port, ()=> console.log(`Listening for disco dogs on port ${port}`))

app.use(express.json(), express.urlencoded({extended: true}), cors()) //express.json() allows us to parse json, and express.urlencoded(extended;true) allows us to parse strings

require('./server/config/database.config');
require('./server/routes/dog.routes')(app);