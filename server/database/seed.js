const db = require('./db.js');
const User = require('./user/user.model.js');

db.sync({force: true})
.then( () => {
  return seedUsers();
})
.then( (user) => {
  console.log('db seeded successfully!');
  console.log('created user?: ', user.dataValues);
})
.catch( (err) => {
  console.error('Could not seed DB: ', err);
});


const seedUsers = () => {
  return User.create({
    email: 'crizzo@gmail.com',
    password: 'hello123'
  });
}
