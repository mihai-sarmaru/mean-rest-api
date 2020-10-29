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