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

    static deleteKey = async (filter) => {
        return await keyModel.deleteOne({ ...filter })
    }

    static findKey = async (filter, select) => {
        return await keyModel.findOne({ ...filter })
            .select({ ...select })
            .lean()
    }

}

module.exports = KeyRepository