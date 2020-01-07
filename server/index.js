const express = require('express')
const app = express()
const massive = require('massive')

app.use(express.json())


massive(5500).then((database) => {
  app.set('db', database)
  console.log(`1- db is connected`)
  app.listen(SERVER_PORT, () => {
    console.log(`2-server is connected on 5500`)
  })
})