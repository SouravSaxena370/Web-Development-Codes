const http=require('http');
const fs=require('fs');

const port=process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    const webpage=fs.readFileSync('index.html');
    console.log(req.url);
    if(req.url=='/')
        res.end(webpage.toString());
    else if(req.url=='/About')
        res.end('<h1>This is about me.</h1>')
    else
        res.end('<h1>Page not found on the server.</h1>')

})

server.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})