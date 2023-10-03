const express=require('express');
const path=require('path')
const Router=express.Router() 
const blogs=require(path.join(__dirname,'../data/blogs.js'))


Router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')
})

Router.get('/blogs',(req,res)=>{
    res.render('bloghome',{
        blogs:blogs
    })
})
// Router.get('/:slug',(req,res)=>{
//     myblogs=blogs.filter((e)=>{
//         return e.slug==req.params.slug;
//     })
//     console.log(req.params.slug)
//     console.log(myblogs)
//     res.send("This is new slug")
// })

Router.get('/:slug', (req, res)=>{  
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })  
    res.render('blogpage',{
        title:myBlog[0].title,
        content: myBlog[0].content
    })
    // res.sendFile(path.join(__dirname, '../views/blogPage.html'))
})

module.exports=Router