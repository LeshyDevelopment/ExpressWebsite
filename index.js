const express = require('express');
const app = express();
const port = 3111;
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello',
  });
});

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
