const express=require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/about',(req,res)=>{
    res.send('This is about me')
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})