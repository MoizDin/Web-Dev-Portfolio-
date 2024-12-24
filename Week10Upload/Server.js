var express = require("express");
let Books = require('./BooksSchema');
let mongodbConnected = require('./MongoDBConnect');
const cors = require('cors');
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

console.log("BOOKS", Books);

app.get('/', function (req, res) {
    res.send("Welcome to the Books API");
});

app.get('/about', async function (req, res) {
    try {
        res.send("MongoDB Express React and Mongoose app. React runs in another application.");
        const count = await Books.countDocuments().exec();
        console.log("Total documents count before addition:", count);
    } catch (err) {
        console.error(err);
    }
});

app.get('/allbooks', async function (req, res) {
    try {
        const allBooks = await Books.find();
        res.json(allBooks);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching books");
    }
});

app.get('/getbook/:id', async function (req, res) {
    let id = req.params.id;
    try {
        const book = await Books.findById(id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).send("Book not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching the book");
    }
});

app.post('/addbooks', async function (req, res) {
    try {
        let newBook = new Books(req.body);
        await newBook.save();
        res.status(200).json({ message: 'Book added successfully' });
    } catch (err) {
        console.error(err);
        res.status(400).send('Adding new book failed');
    }
});

app.post('/updatebook/:id', async function (req, res) {
    let id = req.params.id;
    const { booktitle, PubYear, author, Topic, formate } = req.body;

    try {
        const updatedBook = await Books.findByIdAndUpdate(
            id,
            { booktitle, PubYear, author, Topic, formate },
            { new: true, runValidators: true }
        );
        if (updatedBook) {
            res.status(200).json({ message: 'Book updated successfully', updatedBook });
        } else {
            res.status(404).send("Book not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating book');
    }
});

app.post('/deleteBook/:id', async function (req, res) {
    let id = req.params.id;

    try {
        const deletedBook = await Books.findByIdAndDelete(id);
        if (deletedBook) {
            res.status(200).send('Book deleted successfully');
        } else {
            res.status(404).send("Book not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting book');
    }
});


app.listen(5000, function () {
    console.log("Server is running on port 5000");
});

