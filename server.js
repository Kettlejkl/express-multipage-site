const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

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

// Route to serve the blog page
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

// API route to serve blog posts
app.get('/api/blog', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'posts.json'), 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading posts.json:", err);
      res.status(500).json({ error: "Failed to load blog posts" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
