const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Simulating blog posts data (you can later replace this with a database)
const blogPosts = [
  { id: 1, title: 'First Blog Post', content: 'This is the first blog post content.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the second blog post content.' },
  { id: 3, title: 'Third Blog Post', content: 'This is the third blog post content.' }
];

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for different pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// New /blog route that returns the blog posts in JSON format
app.get('/blog', (req, res) => {
  res.json(blogPosts);
});

// Start the server
// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

