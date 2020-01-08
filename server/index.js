const express = require('express')
const app = express()
const massive = require('massive')
require('dotenv').config()


const { SERVER_PORT, CONNECTION_STRING } = process.env


app.use(express.json())

app.use( express.static( `${__dirname}/../build` ) );



massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
  console.log(`1- db is connected`)
  app.listen(SERVER_PORT, () => {
    console.log(`2-server is connected on ${SERVER_PORT}`)
  })
})