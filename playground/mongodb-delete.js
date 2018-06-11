const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // delete many

    // db.collection('Todos').deleteMany({text: 'walk the dog'}).then(result => {
    //     console.log(result);
    // });

    // delete one

    // db.collection('Todos').deleteOne({text: 'Something to do'}).then(result => {
    //     console.log(result);
    // });

    // find one and delete

    // db.collection('Todos').findOneAndDelete({complete: false}).then(res => {
    //     console.log(res);
    // });

    // db.collection('Users').deleteMany({name: 'Andrew'}).then(res => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b1d3093845e78031034cd98")})
        .then(res => {
            console.log(JSON.stringify(res, undefined, 2));
        });

    db.close();
});