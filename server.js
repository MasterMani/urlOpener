var express = require("express"),
		app = express(),
		routes = require("./routes");

app.set("views", "./ejs")
app.set("view engine", "ejs");
app.use("/jscript", express.static(__dirname + "/js"));
app.use("/cssheet", express.static(__dirname + "/css"));

app.get("/", routes.openUrl);
app.get("/examples", routes.example);
app.get("/about", routes.about);

var ipaddr = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port   = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.listen(port, ipaddr, function(){
	console.log("App is listening on port " + port + "  " + ipaddr);
});

