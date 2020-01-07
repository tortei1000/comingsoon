const express = require('express')
const app = express()
const massive = require('massive')
require('dotenv').config()


const { SERVER_PORT, LOCAL_HOST } = process.env
const path = require('path'); // Usually moved to the start of file

app.use(express.json())


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
  console.log(`1- db is connected`)
  app.listen(SERVER_PORT, () => {
    console.log(`2-server is connected on ${SERVER_PORT}`)
  })
})