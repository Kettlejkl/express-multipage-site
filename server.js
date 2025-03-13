const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Load blog posts at startup
const blogPosts = require('./data/posts.json');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views', 'about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'views', 'contact.html')));
app.get('/blog', (req, res) => res.sendFile(path.join(__dirname, 'views', 'blog.html')));

// API to serve blog data
app.get('/api/blog', (req, res) => {
    res.json(blogPosts);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
