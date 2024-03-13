require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000

//Connect to Mongoose
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.35dmet4.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

//Middleware

//enable CORS
app.use(cors())

// Serve static files
app.use(express.static('public'))

//Parse requests
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Set EJS as templating engine
app.set('view engine', 'ejs')

//Logic goes here

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
