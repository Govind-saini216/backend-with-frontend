// const https = require("https")
import http from 'http';
// const server = http.createServer()
// import {sum,multiply} from './apk.js'
// import fs from 'fs'
// import path from 'path';

const port = 1000 ;

// const fileread = fs.readFileSync('sam.txt','utf-8')
// console.log(fileread)


// const content = ""
//  fs.writeFile('text.html',content,()=>{
//     console.log("server run")
// })

// const extenshion = path.extname("style.py")

 const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url === '/'){
        res.end("<h1>this is home page Route</h1>")
    }
    else if( req.url == "/about"){
        res.end("<h1>this is about page</h1>")
    }
});

server.listen(port,() => {
        console.log(`server port numbers is ${port}`)
    })
    
    // console.log(server)
// sum(100,1200)
// multiply(100,10)