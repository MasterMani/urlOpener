var titleString = " - Validate UPCs, Concatenate and Open Multiple Urls";

exports.openUrl = function(req, res){
  res.render("opener.ejs",  {title : "Open Multiple Urls" + titleString});
}

exports.example = function(req, res){
  res.render("example.ejs", {title : "Examples" + titleString});
}

exports.upcValidator = function(req, res){
  res.render("upcvalidator.ejs", {title : "UPC Validator" + titleString});
}

exports.about = function(req, res){
  res.render("about.ejs", {title : "About Us" + titleString});
}

exports.privacy = function(req, res){
  res.render("privacy.ejs", {title : "Privacy Policy" + titleString});
}

exports.notFound = function(req, res){
  res.render("notfound.ejs", {title : "404 - Page not found" + titleString});
}
