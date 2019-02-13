var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var auth = require('../auth');
var multer = require('multer');
var { STORAGE, DEFAULT_FILE } = require('../../common/generic')

router.get('/user', auth.required, function (req, res, next) {
  User.findById(req.payload.id).then(function (user) {
    if (!user) { return res.sendStatus(401); }

    return res.json({ user: user.toAuthJSON() });
  }).catch(next);
});

router.put('/user', auth.required, multer({ storage: STORAGE('profileImage') }).single('image'), (req, res, next) => {
  User.findById(req.payload.id)
    .then((user) => {
      if (!user) { return res.sendStatus(401); }
      let { username, email, bio, image, password, firstName, lastName, headline, currentPosition, country, state, industry } = req.body;
      // user = Object.assign(user, user.verifyData({ username, email, bio, image, password, firstName, lastName, headline, currentPosition, country, state, industry }))

      if (username) user.username = username;
      if (email) user.email = email;
      if (bio) user.bio = bio;
      if (req.file) user.image = DEFAULT_FILE(req.file).image_url;
      if (password) user.setPassword(password);
      if (firstName) user.firstName = firstName;
      if (lastName) user.lastName = lastName;
      if (headline) user.headline = headline;
      if (currentPosition) user.currentPosition = currentPosition;
      if (country) user.country = country;
      if (state) user.state = state;
      if (industry) user.industry = industry;
      return user.save().then(function () {
        return res.json({ user: user.toAuthJSON() });
      });
    }).catch(next);
});

router.post('/users/login', (req, res, next) => {
  let { email, password } = req.body.user;
  if (!email) {
    return res.status(422).json({ errors: { email: "can't be blank" } });
  }
  if (!password) {
    return res.status(422).json({ errors: { password: "can't be blank" } });
  }

  passport.authenticate('local', { session: false }, function (err, user, info) {
    if (err) { return next(err); }
    if (user) {
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

router.post('/users', (req, res, next) => {
  var user = new User();
  let { username, email, password } = req.body.user;
  user.username = username;
  user.email = email;
  user.setPassword(password);
  user.save().then(function () {
    return res.json({ user: user.toAuthJSON() });
  }).catch(next);
});

module.exports = router;
