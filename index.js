const express = require('express')
const mongoDB= require('./db')
const cors = require("cors");
require("dotenv").config();

const app =express()
const port=process.env.PORT
app.use(cors());
app.use(express.json())
mongoDB();

app.use('/api', require('./Routes/CreateUser'))

app.use('/api', require('./Routes/DisplayData'))

app.use('/api', require('./Routes/OrderData') )

app.get('/',(req,res)=>{
   res.send('running on port ')
})

app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})
