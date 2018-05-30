const User = require('../models/user');

// logic to process a req
exports.signup = function(req, res, next) {
  // pull data out of req object: req.body
  // console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  // see if user with given email exists
  // callback: existingUser: users who already exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    // if user with email exists, reutrn an error
    // 422 unprocessable entity
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use'} );
    }

    // if user with email does not exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) { return next(err); }

      // respond to request indicating user was created
      res.json({ success: true });
    });

  });
}