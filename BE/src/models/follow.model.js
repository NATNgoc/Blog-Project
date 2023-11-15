'use strict'
const mongoose = require('mongoose');
const COLLECTION_NAME = 'follows'
const DOCUMENTS_NAME = 'follow'

var followSchema = new Schema({
    follower_user_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    following_user_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'blocked']
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

//Export the model
module.exports = mongoose.model(DOCUMENTS_NAME, followSchema);