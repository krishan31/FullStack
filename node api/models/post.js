const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is require",
        minlength: 4,
        maxlength: 150 //validation
    },
    body: {
        type: String,
        required: "Body is require",
        minlength: 4,
        maxlength: 2000

    },
    
},{
    timestamps:true
});

module.exports = mongoose.model("Post", postSchema);