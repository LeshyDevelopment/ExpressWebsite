const express = require('express');
const app = express();
const port = 3111;
const path = require('path');
const axios = require('axios');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/api/developers', (req, res) => {
  let users = [];

  for (let id = 0; id < 100; id++) {
    let firstName = 'TEST';
    let lastName = 'TEST';
    let email = 'TEST@gmail.com';

    users.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
  }

  res.send({ data: users });
});

app.get('/', (req, res) => {
  // axios.get("https://api.neoscan.io/api/main_net/v1/get_all_nodes")
  // .then(data => res.json(data))
  // .catch(err => next(err));

  res.render('footer', {
    title: 'Hello',
  });
});

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
