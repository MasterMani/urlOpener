var express = require("express"),
    app = express(),
    routes = require("./routes");

app.set("views", "./ejs")
app.set("view engine", "ejs");
app.use("/jscript", express.static(__dirname + "/js"));
app.use("/cssheet", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname+"/images"))

app.get("/", routes.openUrl);
app.get("/upcvalidator", routes.upcValidator);
app.get("/examples", routes.example);
app.get("/about", routes.about);
app.get("/privacy", routes.privacy);
app.get("/robots.txt", function(req, res){
	res.sendFile(__dirname + "/robots.txt");
});
app.get("/googleb4a24b63479a4946.html", function(req, res){
	res.sendFile(__dirname + "/googleb4a24b63479a4946.html");
})
app.get("*", routes.notFound);

var ipaddr = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port   = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.listen(port, ipaddr, function(){
  console.log("App is listening on port " + port + "  " + ipaddr);
});

