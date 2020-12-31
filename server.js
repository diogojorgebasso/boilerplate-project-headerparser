// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var browserEnv = require('browser-env')
browserEnv(['navigator']);
const fetch = require('node-fetch');


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
  res.json({message: "HELLO WORLD!!!"})
});

app.get("/api/whoami", (req, res) => {
  let languages = navigator.languages;
  let sUsrAg = navigator.userAgent;
  let GetIp = req.ip
  res.json({ipaddress: GetIp, language: languages, software: sUsrAg});
});


var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
