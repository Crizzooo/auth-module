const router = require('express').Router();
const bcrypt = require('bcrypt');

//import User model
const User = require('../../database/user/user.model.js');

//Set Constants for bcrypt
const saltRounds = 10;

//NOTE: Sample Get User route, for with and without passport
// // check currently-authenticated user, i.e. "who am I?"
// router.get('/', function (req, res, next) {
//   // with Passport:
//   res.send(req.user);
//   // // before, without Passport:
//   // User.findById(req.session.userId)
//   // .then(user => res.json(user))
//   // .catch(next);
// });


// signup, i.e. "let `me` introduce myself"
router.post('/', function (req, res, next) {
  let plaintextPassword = req.body.password;
  bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
      if (hash && !err){
        //Success
        User.findOrCreate({
          where: {
            email: req.body.email
          },
          defaults: { // if the user doesn't exist, create including this info
            password: hash
          }
        })
        .spread((user, created) => {
          if (created) {
            // with Passport:
            // req.logIn(user, function (err) {
            //   if (err) return next(err);
            //   res.json(user);
            // });
            // // before, without Passport:
            req.session.userId = user.id;
            res.json(user);
          } else {
            res.sendStatus(401); // this user already exists, you cannot sign up
          }
        });
      } else {
        res.status(401).send(err);
      }

  });

});



// login, i.e. "you remember `me`, right?"
router.put('/', function (req, res, next) {
  let plaintextPassword = req.body.password;
  User.findOne({
    where: {
      email: req.body.email}
  })
  .then( (res) => res.dataValues)
  .then( (user) => {
    if (!user) {
      res.sendStatus(401);
    } else {
      console.log('found user: ', user);
      bcrypt.compare(plaintextPassword, user.password, (err, result) => {
        if (err) next(err);
        if (result) {
          req.session.userId = user.id;
          res.json(user);
        }
      });
    }
  })
  .catch(next);
});

// logout, i.e. "please just forget `me`"
router.delete('/', function (req, res, next) {
  // with Passport
  // req.logOut();
  // // before, without Passport
  req.session.destroy();
  res.sendStatus(204);
});


module.exports = router;
