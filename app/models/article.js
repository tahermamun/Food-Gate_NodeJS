const mongoose = require('mongoose');

const addArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    date: {  
        type: Date,
        default: Date.now,
    }
});

const Article = mongoose.model("Article", addArticleSchema);
module.exports = Article;