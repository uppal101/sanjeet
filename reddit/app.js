
const express = require('express');
const app = express();
const PORT = 8000;
const passport = require('passport');
const RedditStrategy = require('passport-reddit').Strategy;
const session = require('express-session');


app.use(session({
  secret: 'reddit',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new RedditStrategy({
    clientID: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_SECRET_ID,
    callbackURL: "http://localhost:8000"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ redditId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/auth/reddit', function(req, res, next){

  req.session.state = crypto.randomBytes(32).toString('hex');
  passport.authenticate('reddit', {
    state: req.session.state,
    duration: 'permanent',
  })(req, res, next);
});

app.get('/auth/reddit/callback', function(req, res, next){
  console.log(req.session)
  // Check for origin via state token
  if (req.query.state == req.session.state){
    passport.authenticate('reddit', {
      successRedirect: '/',
      failureRedirect: '/login'
    })(req, res, next);
  }
  else {
    next( new Error(403) );
  }
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

module.exports = app;
