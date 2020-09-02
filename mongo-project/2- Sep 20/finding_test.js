const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe test
describe('Finding records', function(){

    var char;
    
    beforeEach(function(done){
         char = new MarioChar({
            name:'Mario'
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });



//Create tests
it('Find one record from the database', function(done){
   
    MarioChar.findOne({ name: 'Mario' }).then(function(result){
        console.log(result);
        assert(result.name === 'Mario');
        done();
    })
});


//Create tests
it('Find one record byId from the database', function(done){
   
    MarioChar.findOne({ _id: char._id }).then(function(result){
        console.log(result);
        assert(result._id.toString() === char._id.toString());
        done();
    });
});
});