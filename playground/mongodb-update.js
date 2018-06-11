const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('5b1d2203ce398c2f06555242')
        },
        {
            $set: {
                name: 'Ruzhan'
            },
            $inc: {
                age: 2
            }
        },
        {
            returnOriginal: false
        }
    ).then(res => {
        console.log(res);
    });

    db.close();
});