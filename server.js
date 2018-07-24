require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//

app.use(bodyParser.json())
app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Express is listening on port " + PORT)
})
