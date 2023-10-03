const express=require('express')
const path = require('path')
const app=express()
const port=3000
const exphbs=require('express-handlebars')
// console.log(blogs)
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.use(express.static(path.join(__dirname,'static')))
app.use('/',require(path.join(__dirname,'routes/blog.js')))


app.listen(port,()=>{
    console.log(`Blog Server is running at port ${port}`)
})