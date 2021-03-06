const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');


//Describe test

describe('Nesting records', function(){
    beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
        done();
    })
});

    // create test
    it('Create an author with sub-documents', function(done){
        pat = new Author({
            name: 'Patrick Routes',
            books: [{title: 'name of the wind', pages:400}]
        });

        pat.save().then(function(){
            Author.findOne({name: 'Patrick Routes'}).then(function(record){
                console.log(record);
                assert(record.books.length === 1);
                done();
            })
        })
    });


    it('Adds a book to an author', function(done){
        var pat = new Author({
            name: 'Patrick Routes',
            books: [{title: 'name of the wind', pages: 400}]
        });

        pat.save().then(function(){
            Author.findOne({name: 'Patrick Routes'}).then(function(record){
                //add a book to book array
                record.books.push({title: 'Wise Man Fear', pages:500})
                record.save().then(function(){
                    Author.findOne({name: 'Patrick Routes'}).then(function(result){
                        assert(result.books.length === 2);
                        done();
                    })
                })
            })
        })
    })
})