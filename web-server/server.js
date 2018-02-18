
const path = require('path');

const express = require('express');
const app = express();

app.set('views', 'public');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    currentYear: new Date().getFullYear()
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'Some Text Here',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    currentYear: new Date().getFullYear()
  });
});

app.listen(3000, () => {
  console.log('Listening on localhost:3000...');
});