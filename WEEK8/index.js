const mongoose = require('mongoose');
//const app = express();

const MONGO_URI = 'mongodb://localhost:27017/Week8';

//Connect to MongoDB
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

//Handle connection errors
db.on('error', function (err) {
    console.log("Error occurred during connection: " + err);
});

//Once connected
db.once('connected', function () {
    console.log(`Connected to ${MONGO_URI}`);
});

//Creating the schema
const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    gender: String,
    salary: Number
});

const personDoc = mongoose.model('Person', PersonSchema, 'personCollection');

 const doc1 = new personDoc({
    name: 'Mo',
    age: 20,
    gender: "Male",
    salary: 5000
});

 doc1.save()
    .then((doc1) => {
        console.log("New document has been added into your database.", doc1);
    })
    .catch((err) => {
        console.error(err);
    });

let manypersons = [
    { name: 'Simon', age: 42, gender: "Male", salary: 3456 },
    { name: 'Neesha', age: 23, gender: "Female", salary: 1000 },
    { name: 'Mary', age: 27, gender: "Female", salary: 5402 },
   { name: 'Mike', age: 40, gender: "Male", salary: 4519 }
];

personDoc.insertMany(manypersons)
   .then(function() {
        console.log("Data inserted"); // Success
    })
    .catch(function(error) {
        console.log(error); // Failure
    });

personDoc.find({})
         .sort({salary: 1})
        .select('name Salary age')
        .limit(10)
        .exec()
        .then(docs => {
            console.log("showing multiple documents")
            docs.forEach(function(Doc) {
                console.log(Doc.age, Doc.name);
        })
        })
        .catch(err => {
            console.error(err)
        })

var givenage = 15 
personDoc.find({gender:"Female", age:{$gte:givenage}})
            .sort({salary:1})
            .select('name Salary age')
            .limit(10)
            .exec()
            .then(docs => {
            console.log("showing age greater than", givenage)
            docs.forEach(function(Doc) {
            console.log(Doc.age, Doc.name)
            })
            })
            .catch(err => {
            console.error(err)})

personDoc.countDocuments().exec()
.then(count=>{
console.log("Total documents Count :", count)
}) .catch(err => {
console.error(err)
})
            
personDoc.deleteMany({ age: { $gte: 25 } })
.exec()
.then(docs=>{
console.log('deleted documents are:',docs);
}).catch(function(error){
console.log(error);
});

personDoc.updateMany({ gender: "Female" },{salary:5555})
.exec()
.then(docs=>{
console.log("update")
console.log(docs); 
}).catch(function(error){
console.log(error); 
});