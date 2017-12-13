
var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var https = require('https');
var fs = require('fs');
var SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';
var optionsgetmsg = {
    host : 'accounts.google.com', // here only the domain name
    port : 443,
    path : '/o/oauth2/revoke?token=1/Gpxa3v2Z7MnfsztxQh8ar6KXIUE2cS6OgyAqjPmAjNzsP724z6J0aM0NLod7lT0d', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};

fs.readFile('config.json', function processClientSecrets(err, content) {
    if (err) {
        console.log('Error loading client secret file: ' + err);
        return;
    }
    // Authorize a client with the loaded credentials, then call the
    // Google Calendar API.
    revoke(optionsgetmsg);
});

function revoke(credentials){


    var reqGet = https.request(optionsgetmsg, function(res) {
        console.log("statusCode: ", res.statusCode);
        res.on('data', function(d) {
            console.info('GET result after POST:\n');
            process.stdout.write(d);
            //fs.truncate('/Users/aranjan/.credentials/calendar-nodejs-quickstart.json', 0, function(){console.log('done')});
            console.info('\n\nCall completed');
        });
    });

    reqGet.end();
    reqGet.on('error', function(e) {
        console.error(e);
    });
}


