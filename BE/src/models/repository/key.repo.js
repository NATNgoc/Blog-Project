const mongoose = require('mongoose');
const keyModel = require('../key.model');
const { objectIdParser } = require('../../utils');

class KeyRepository {

    static createNewKey = async (userId, publicKey) => {
        return await keyModel.findOneAndUpdate({ userid: objectIdParser(userId) }, {
            userid: objectIdParser(userId),
            publicKey: publicKey
        }, {
            upsert: true,
            new: true
        })
    }

}

module.exports = KeyRepository