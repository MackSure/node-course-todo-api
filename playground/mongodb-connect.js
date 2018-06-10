const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    };
    console.log('Connected to Mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     text2: 'Some other thing todo',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)

    db.collection('Users').insertOne({
        // _id: 123,
        name: 'Ruzhan',
        age: 30,
        location: 'China'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        };
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});



