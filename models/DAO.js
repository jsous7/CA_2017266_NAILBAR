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
        return new Promise((resolve, reject) => {
            db.getDbInstance().collection(collection).insertOne(userInput, (err, result) => {
                if (!err) {
                    resolve(result);
                    return;
                }
                reject('Failed to insert new document');
                return;
            });
        })
    },

    readAll: () => {
       
    },

    read: () => {
       
    },

    update: () => {
      
    },

    delete: (id) => {
        
    }
}