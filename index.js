const express = require('express');
const app = express();
const port = 3111;
const path = require('path');
const faker = require('faker');
const axios = require('axios');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/api/developers', (req, res) => {
  let users = [];

  for (let id = 0; id < 100; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();

    users.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
  }

  return { data: users };
});

app.get('/', (req, res) => {
  // axios.get("https://api.neoscan.io/api/main_net/v1/get_all_nodes")
  // .then(data => res.json(data))
  // .catch(err => next(err));

  res.render('index', {
    title: 'Hello',
  });
});

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
