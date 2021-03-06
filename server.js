require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log("Express is listening on port " + PORT)
})