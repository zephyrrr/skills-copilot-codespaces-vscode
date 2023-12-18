// Create web server

// Import express module
const express = require('express');

// Import body-parser module
const bodyParser = require('body-parser');

// Create web server
const app = express();

// Set static files
app.use(express.static('public'));

// Set body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Set view engine
app.set('view engine', 'ejs');

// Set comments array
const comments = [
    {name: 'John', comment: 'Hello World!'},
    {name: 'Mary', comment: 'Hi, John!'}
];

// Set comments page
app.get('/comments', (req, res) => {
    res.render('comments', {comments: comments});
});

// Set comments post
app.post('/comments', (req, res) => {
    // Get name and comment from request body
    const name = req.body.name;
    const comment = req.body.comment;

    // Push name and comment to comments array
    comments.push({name: name, comment: comment});

    // Redirect to comments page
    res.redirect('/comments');
});

// Set listen port
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});
