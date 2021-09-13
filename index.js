const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('hello word! ')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})