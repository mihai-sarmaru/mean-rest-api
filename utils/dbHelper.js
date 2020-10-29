const constants = require('../constants/constants');
const mongoose = require('mongoose');

module.exports.formatMongoData = (mongoData) => {
    if (Array.isArray(mongoData)) {
        let newDataArray = [];
        for (value of mongoData) {
            newDataArray.push(value.toObject());
        }
        return newDataArray;
    }
    return mongoData.toObject();
}

module.exports.checkObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(constants.databaseMessage.INVALID_ID);
    }
}