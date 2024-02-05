//importing express package 
const express = require('express') 

// initialising express into app
const app = express()

// declaring port
const port = 5000

// home route
app.get('/',(req,res)=> {
    res.send('welcome to homepage')
})

app.get('/money',(req,res)=> {
    res.send('welcome to money page')
})

app.get('/services',(req,res)=> {
    res.send('welcome to services page')
})

app.get('/contact',(req,res)=> {
    res.send('welcome to contact page')
})

app.get('/testimony',(req,res)=> {
    res.send('welcome to testimony page')
})

// listening for request
app.listen(port , ()=>{
    console.log('server started sucessfully')
})