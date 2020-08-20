const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff')); //middleware for static files - goona load b/w req&res

app.get('/', function(req, res) {
    res.send('My hompage');
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name',  function(req, res){
    // res.send(`The browser will give the ${req.params.name}`);
    const data = {age:22, job: "Software Engineer"};
    res.render('profile', {person: req.params.name, data: data});
})

app.listen(3000);


























//****  HttP server with routes and changing html pages ****//
// const http = require('http');
// const fs = require('fs');


// const server = http.createServer(function(req, res){
//     console.log(`request was made: ${req.url}`);
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if(req.url === '/contact'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     } else if(req.url === '/api/post'){
//         const post = [{name: 'krishan', age: 22}, {name: 'Arora', age: 22}];
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(post));
//     }else{
//         res.writeHead(200, {'content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     }
//     // res.writeHead(200, {'content-Type': 'text/plain'});
//     // res.end('feed me popcorn');
// });

// server.listen(3000, '127.0.0.1');
// console.log('Listening to port 3000');


















// ****   Event Emitter ***  ////

// const events =  require('events');
// const eventEmitter = new events.EventEmitter();

// const ringbell = function(){
//     console.log("ring ring ring");
// }

// eventEmitter.on('doorOpen', ringbell);
// eventEmitter.on('bellrings', function(message){
//     console.log(message);
// })
// eventEmitter.emit('doorOpen');
// eventEmitter.emit('bellrings','welcome');
















//*** readfile & writefile  ***//
// const fs = require('fs');

// fs.readFile('input.txt', (err, data) =>{
//     if(err){
//         console.log(err); 
//     }else{
//         console.log("Async data is " + data.toString());
//     }
// });
// console.log("this is me");


//*** sync  ***//
// const data = fs.readFileSync('input.txt');
// console.log(`sync data ${data.toString()}`);
// console.log(" ");

// fs.writeFileSync('write.txt', 'hi my name is krishan');
