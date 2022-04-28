const express = require('express')
const parser = require("body-parser")
const cors = require("cors")
const api = require("./routes/api")
require("dotenv").config()

const app = express()
const APP_PORT = process.env.PORT || 2020

app.use(cors())
app.use(parser.json())

app.use("/api/", api)

app.get('/', (req, res) => {

    res.status(200).json({
        msg: "Welcome to node app api"
    })

});


app.listen(APP_PORT, ()=>{
    console.log(`Server litening on port ${APP_PORT}`)
})



