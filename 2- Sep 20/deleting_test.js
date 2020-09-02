const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe Test

describe('Deleting records', function(){

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

    //Create Test

    it('Deletes one record from the database',function(done){

        MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){
                assert(result === null);
                done();
            })
        })
    });
    
})