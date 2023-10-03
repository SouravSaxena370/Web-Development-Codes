const express=require('express')
const mongodb=require('mongodb')

require('./config')
const Product=require('./product')

const app=express();
app.use(express.json())

app.post('/',async(req,res)=>{
    let data=new Product(req.body)
    let result=await data.save()
    res.send(result)
})

app.get('/',async (req,res)=>{
    let data=await Product.find()
    res.send(data)
})

app.get('/:key',async(req,res)=>{
    let data=await Product.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"lang":{$regex:req.params.key}}
        ]
    })
    res.send(data)
})

app.put('/:id',async(req,res)=>{
    let data=await Product.updateOne({_id: new mongodb.ObjectId(req.params.id)},{$set:req.body})
    res.send(data)
})

app.delete('/:id',async(req,res)=>{
    let data=await Product.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(data)
})



const PORT=5000
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})