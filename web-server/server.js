
const express = require('express');
const app = express();

app.set('views', 'public');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('<h1>Hello, Express</h1>');
});

app.get('/help', (req, res) => {
  res.render('help', { title: 'Help', message: 'Some Text Here' });
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