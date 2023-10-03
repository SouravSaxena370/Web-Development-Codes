const http=require('http');

const port=process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Bye bye !</h1><p>See you again...</p>');
})

server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})