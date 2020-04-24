const db = require('./db');
db.dbConnect((err) => {
    if (!err) {
        console.log('DB Connected');
    } else {
        console.log('Error when connecting to database');
        process.exit(1);
    }  
});

collection = null;

module.exports = {
    setCollection: (collectionName) => {
        collection = collectionName;
    },

    create: (userInput) => {
        return db.getDbInstance().collection(collection).insertOne(userInput);
    },

    readAll: () => {
        return db.getDbInstance().collection(collection).find({}).toArray();
    },

    read: (id) => {
        return db.getDbInstance().collection(collection).findOne({_id : db.getPrimaryKey(id)})
    },

    update: (id, userInput) => {
        return db.getDbInstance().collection(collection).findOneAndUpdate({_id : db.getPrimaryKey(id)}, {$set : userInput}, {returnOriginal : true});  
    },

    delete: (id) => {
        return db.getDbInstance().collection(collection).findOneAndDelete({_id : db.getPrimaryKey(id)});
    }
}

