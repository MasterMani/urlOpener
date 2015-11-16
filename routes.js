exports.openUrl = function(req, res){
	res.render("opener.ejs",  {title : "Concatenate and Open Multiple Urls"});
}

exports.example = function(req, res){
	res.render("example.ejs", {title : "Examples"});
}

exports.about = function(req, res){
	res.render("about.ejs", {title : "About Us"});
}
