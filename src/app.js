const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const publicDir = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const parttialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDir));

hbs.registerPartials(parttialsPath);

app.get('', (req, res) => {
  'use strict';

  res.render('index', {
    title: 'Weather App',
    name: 'Ashish'
  });
});

app.get('/about', (req, res) => {
  'use strict';

  res.render('about', {
    title: 'Ashish',
    age: 24
  });
});

app.get('/help', (req, res) => {
  'use strict';

  res.render('help', {
    title: 'Helpful Page',
    text: 'this is some helpful text'
  });
});

app.get('/help/*', (req, res) => {
  'use strict';

  res.render('error', {
    error: 'Help Article Not Found'
  });
});

app.get('/weather', (req, res) => {
  'use strict';

  res.send([
    {
      forecast: 'Its Raining here in Banglore',
      location: 'Banglore'
    }
  ]);
});

app.get('*', (req, res) => {
  'use strict';

  res.render('error', {
    error: 'Page Not Found'
  });
});

app.listen(3000, () => {
  'use strict';

  console.log('Server is up and running on port 3000');
});
