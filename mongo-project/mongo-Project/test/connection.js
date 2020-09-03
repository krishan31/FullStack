// this file is used for connecting to the database

const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//connext to the db before tests run
before(function(done){
//connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');  //connection string locally
mongoose.connection.once('open',function(){
    console.log('connected');
    done();
}).on('error',function (error) {
    console.log('connection error',error);
});
});

