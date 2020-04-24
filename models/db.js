const MongoDb = require('mongodb');
const MongoClient = MongoDb.MongoClient;
const ObjectID = MongoDb.ObjectID;

const url="mongodb://localhost:27017";
const dbName = 'nailbar_mongodb';
const mongoOptions = {useNewUrlParser : true, useUnifiedTopology: true}
const dbInstance = {
    db : null
}

module.exports = {
    dbConnect : (callBack) => {
        if (!dbInstance.db) {
            MongoClient.connect(url, mongoOptions, (err, client) => {
                if (!err){
                    dbInstance.db = client.db(dbName);
                    callBack();
                } else {
                    callBack(err);
                }
            })
        } else {
            callBack(err);
        }
    },

    getDbInstance : () => {
        return dbInstance.db;
    },

    getPrimaryKey : (id) => {
        return ObjectID(id);
    }
}