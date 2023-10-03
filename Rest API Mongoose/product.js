const mongoose=require('mongoose')

const ProductSchema=mongoose.Schema({
    name:String,
    lang:String,
    membership_duration:Number
})

module.exports = mongoose.model('comments',ProductSchema)