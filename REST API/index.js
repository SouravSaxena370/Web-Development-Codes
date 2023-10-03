const {MongoClient}=require('mongodb');
const mongodb=require('mongodb');
const express=require ('express');
const url='mongodb://localhost:27017';
const database='BlogServer';
const client=new MongoClient(url);

const app=express();
app.use(express.json());

async function connecttodb(database_name,collection_name)
{
    let result=await client.connect();
    let db=result.db(database_name);
    let collection=db.collection(collection_name);
    return collection
}

async function getData()
{
    let mycollection= await connecttodb(database,'content')
    return await mycollection.find({}).toArray();
}

app.get("/articles",async (req,res)=>{
    res.send(await getData());
})

async function setData(data){
    let mycollection=await connecttodb(database,'content')
    let res=await mycollection.insertOne(data);
    if(res.acknowledged)
        return "data inserted successfully"
    else
        return "data not inserted"
}

app.post("/articles",async (req,res)=>{
    res.send(await setData(req.body));
})

async function updataData(id,updation)
{
    let mycollection=await connecttodb(database,'content')
    let res=await mycollection.updateOne({_id:new mongodb.ObjectId(id)}, {$set:updation})
    if(res.modifiedCount>0)
    return "Data updated successfully"
    else
    return "Data not updated"
}

app.put('/articles/:id', async (req,res)=>{
    // res.send(req.params.id)
    res.send(await updataData(req.params.id,req.body));
})

async function deleteData(id)
{
    let mycollection=await connecttodb(database,'content')
    let res=await mycollection.deleteOne({_id: new mongodb.ObjectId(id)})
    if(res.deletedCount===1)
    return "Data deleted successfully"
    else
    return "Data not deleted"
}

app.delete('/articles/:id',async (req,res)=>{
    res.send(await deleteData(req.params.id))
})

app.listen(3000,(req,res)=>{
    console.log("server is running at port 3000");
})