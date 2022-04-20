const mongoose = require('mongoose');

const feedbackScheme = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },

    comment:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('feedback', feedbackScheme);