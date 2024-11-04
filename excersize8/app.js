const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the contact form
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Route to handle form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Form validation
    if (!name || !email || !message) {
        res.render('contact', { error: 'All fields are required', formData: req.body });
    } else {
        res.render('thankyou', { name, email, message });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
