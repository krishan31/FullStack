const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Modal

//Schema
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

//Modal
const MarioChar = mongoose.model('mariochar',MarioCharSchema);

module.exports = MarioChar;

// we have created a schema (MarioCharSchema) and the model(MarioChar) based on that schema
