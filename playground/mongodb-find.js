const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    };
    console.log('Connected to Mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b1d2f962ee93302ef2b5f00')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },
    //     err => {
    //     console.log('Unable to fetch todos', err)
    //     });

    // db.collection('Todos').find().count().then((count) => {
    //         console.log(`Todos count: ${count}`);
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //         console.log('Unable to fetch todos', err)
    //     });

    db.collection('Users').find({name: 'Mike'}).toArray().then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
    })

     db.close();
});



