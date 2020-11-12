const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for image
const PostSchema = new Schema({
    photo:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    }
}, {timestamps:true});

module.exports = mongoose.model("Post", PostSchema);