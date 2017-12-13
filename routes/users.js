var express = require('express');
var router = express.Router();
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var passport = require('passport');
var gcal     = require('google-calendar');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var consumer_key = '414419257563-5gs08tvo14jtmpu3fj86uc9ev4c2csng.apps.googleusercontent.com';
    var consumer_secret = 'd0z-xJAsf3QClCY9afwof1cL';

    passport.use(new GoogleStrategy({
            clientID: consumer_key,
            clientSecret: consumer_secret,
            callbackURL: "http://localhost:3000/auth/google/callback",
            scope: ['openid', 'email', 'https://www.googleapis.com/auth/calendar']
        },
        function(accessToken, refreshToken, profile, done) {
            var google_calendar = new gcal.GoogleCalendar(accessToken);
            res.render('users',{title : accessToken})
            return done(null, profile);
        }
    ));
});

module.exports = {
    consumer_key     : '414419257563-5gs08tvo14jtmpu3fj86uc9ev4c2csng.apps.googleusercontent.com',
    consumer_secret  : 'd0z-xJAsf3QClCY9afwof1cL',
    refresh_token    : 'http://localhost:8080/auth/google/callback',
}
module.exports = router;
