const assert = require('assert');
const MorioChar = require('../models/mariochar');
const MarioChar = require('../models/mariochar');

//Describe test


describe('Updating Records', function(){

    var char;

    beforeEach(function(done){
      char = new MarioChar({
            name:'Mario',
            weight: 50
        });

        char.save().then(function(){
            done();
        });
    });

    //Update test
    
    it('Update one record in the database', function(done){
        MarioChar.findOneAndUpdate({name: 'Mario'},{name: 'Krishan'}).then(function(){
            MarioChar.findOne({_id: char._id}).then(function(result){
                assert(result.name === 'Krishan');
                done();
            });
        });
    });


    /// 
    it('Update inc one record in the database', function(done){
        MarioChar.update({},{ $inc: {weight: 1 } }).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(record){
                assert(record.weight === 51);
                done();
            })
        });
    });


});