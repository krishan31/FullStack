
// const {sum,sub} = require('./helpers');  //object destructuring
// const http = require('http')

// const server = http.createServer( (req, res)=>{
//     res.end("hello from node.js");
// })

// server.listen(3000);



// const total = sum(10, 82);
// const toot = sub(10, 82);
// console.log(total);
// console.log(toot);


const express = require('express')
const app = express() 

app.get('/', (req, res)=>{
    res.send("hey whats'up frim express")
})

app.listen(3000)