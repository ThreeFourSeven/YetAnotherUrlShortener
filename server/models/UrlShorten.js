const mongoose = require('mongoose');
const {Schema} = mongoose;

const urlshorten = new Schema({
    originalURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

const UrlShorten = new mongoose.model('urls', urlshorten);
module.exports = UrlShorten;
