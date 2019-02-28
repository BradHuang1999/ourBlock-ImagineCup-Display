const appInsights = require("applicationinsights");
appInsights.setup("66a62cad-3d38-4fe4-8f7e-b41f11def90d");
appInsights.start();

var express = require('express');
var serveStatic = require('serve-static');

app = express();

app.use(serveStatic(__dirname + "/police-view/dist"));
app.get('/police', function(req, res) {
    res.sendFile(__dirname + '/police-view/dist/index.html');
});

app.use(serveStatic(__dirname + '/civilian-mobile-app'));
app.get('/app', function(req, res) {
  res.sendFile(__dirname + '/civilian-mobile-app/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port);

console.log("OurBlock is running at port", port);
