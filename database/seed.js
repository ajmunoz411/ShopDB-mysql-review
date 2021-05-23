//quick way to check relative path - hold command and click the path and if it's correct, it'll take you to the referenced file
var connection = require('./index.js');

const items = [
  {
    name: 'Avocados',
    price: 5,
    quantity: 54
  },
  {
    name: 'Sammitches',
    price: 10,
    quantity: 7
  },
  {
    name: 'Celery',
    price: 2,
    quantity: 10
  },
  {
    name: 'TP',
    price: 200,
    quantity: 2
  },
  {
    name: 'Beer',
    price: 10,
    quantity: 65
  },
  {
    name: 'Bread',
    price: 3,
    quantity: 12
  }
]

const seeder = () => {
  items.forEach(entry => {
    const { name, price, quantity } = entry;
    //need quotes around the name variable b/c mySQL needs them for string inputs
    // price and quantity don't need it because the table is expecting integers
    const queryStr = `INSERT INTO inventory (name, price, quantity) VALUES ("${name}", ${price}, ${quantity});`;
    //runs the query string, if it's successful, it'll pass null as the error, if it's not, it will pass the error to error
    connection.query(queryStr, (err, results) => {
      if (err) {
        console.log('seed function error', err);
      } else {
        console.log('seeding function worked', results);
      }
    })
  })
};

seeder();
//Need to run this file still - can run using node in the terminal