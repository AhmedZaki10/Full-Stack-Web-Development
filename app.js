const express = require('express')
const app = express()
const port =process.env.PORT || 3000
const mongoose = require('mongoose')
const Mydata = require("./models/mydataSchema")
var methodOverride = require('method-override')
const allRouters = require('./routes/allRouters') 
const add_customer = require('./routes/add-customer')

app.use(methodOverride('_method'))

app.use(express.urlencoded({extended : true}))

app.set('view engine' , 'ejs')

app.use(express.static('public'))

app.use(allRouters)
app.use(add_customer)

// Auto Refresh code
const path = require('path')
const livereload = require('livereload')
const livereloadServer = livereload.createServer()
livereloadServer.watch(path.join(__dirname , 'public'))

const connectLivereload = require('connect-livereload')
app.use(connectLivereload())

livereloadServer.server.once("connection" , () => {
    setTimeout(() => {
        livereloadServer.refresh("/")
    } , 100)
})



mongoose.connect('mongodb+srv://devali:ahmedsaeed@cluster0.reulhqg.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    app.listen(port , () => {
        console.log(`http://localhost:${port}/`)
    })
})
.catch((err) => {
    console.log(err)
})


