// using commonJS syntax:
const fs=require('fs');

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })

// const a=fs.readFileSync('file.txt')
// console.log(a)
// console.log(a.toString())

// fs.writeFile('file.txt','This is new data in the file',()=>{
//     console.log('written in the file');
// })

const a=fs.writeFileSync('file.txt','Data2 for the file')
console.log(a)
console.log("Finished reading file")