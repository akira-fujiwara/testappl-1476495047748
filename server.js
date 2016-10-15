var express = require('express');
var request = require('request');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Home page!');
});


app.get('/forecast/:lat/:lng', function (req, res){
//  var url = "https://459a6541-4717-46f5-8b6c-f80f2123e8d3:h3gHh2sx5T@twcservice.mybluemix.net/api/weather/v2/forecast/daily/10day?units=e&geocode="+req.params.lat+","+req.params.lng+"&language=ja";
//  var url = "https://e0ba6404-3e43-419b-b4e3-d5414259d358:7zCCt0kHbr@twcservice.mybluemix.net/api/weather/v2/forecast/daily/10day?units=e&geocode="+req.params.lat+","+req.params.lng+"&language=en-US";
  var url = "https://459a6541-4717-46f5-8b6c-f80f2123e8d3:h3gHh2sx5T@twcservice.mybluemix.net/api/weather/v1/geocode/"+req.params.lat+"/"+req.params.lng+"/forecast/daily/10day.json?language=ja";
//  var url =  process.env.P2016JAPAN_WEATHER + "/api/weather/v2/forecast/daily/10day?units=e&geocode="+req.params.lat+","+req.params.lng+"&language=en-US";

  request(url, function(err, result, body){
    body = JSON.parse(body);
    res.send({forecast: body});
  });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Example app listening');
});