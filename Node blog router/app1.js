// const express = require('express');

// const app = express();

// app.get('/', (req, res) =>{
//     // res.send('<p> home page </p>');
//     res.sendFile(__dirname + '/index.html')
// });

// app.get('/contact', (req, res) =>{
//     // res.send('<p> about page </p>');
//     res.sendFile(__dirname + '/contact.html')
// });


// //404 page
// app.use((req, res) => {
//    res.status(404).sendFile(__dirname + '/404.html');
// })


// app.listen(3000);

const buf = Buffer.alloc(10);
buf.write('hello');
console.log(buf.length);
 
//Node.js process //
// console.log(` ${process.arch}`)
// console.log(` ${process.pid}`)
// console.log(` ${process.platform}`)
// console.log(` ${process.version}`)

//process loop //
process.argv.forEach((value, index, array) => {  
    console.log(`${index}: ${value}`);  
  }); 

  console.log(process.cwd()); //current work dir
