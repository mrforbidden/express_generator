var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./modles/user');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

