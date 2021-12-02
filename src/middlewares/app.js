const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//body-parser for req and res
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
app.use(bodyParser.json())




module.exports = {
    app
}