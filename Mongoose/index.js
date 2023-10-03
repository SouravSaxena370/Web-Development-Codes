const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/BlogServer");
const ProductSchema=new mongoose.Schema({
    name:String,
    membership_duration:Number
}); 
const ProductModel=mongoose.model('comments',ProductSchema)

const saveInDB=async()=>{
    let data=new ProductModel({name:"Raj",membership_duration:3})
    let result=await data.save()
    console.log(result)
}

// saveInDB()

const updateInDB=async()=>{
    let data=await ProductModel.updateOne(
        {
            name:"Raman"
        },
        {
            $set:{
                name:"Roy",
                salary: 50000
            }
        }
    )
    console.log(data)
}

// updateInDB()

const deleteInDB=async()=>{
    let data=await ProductModel.deleteOne({name:"Raj"})
    console.log(data)
}

// deleteInDB()

const searchInDB=async ()=>{
    let data=await ProductModel.find({membership_duration:3})
    console.log(data)
}

searchInDB()