
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('views', 'public');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} - ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) console.log('Unable to write to that file');

    next();
  });
});

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});