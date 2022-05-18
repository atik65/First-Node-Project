exports.getHomepage = (req, res) => {
  res.send("Welcome to Contact Homepage!");
};

exports.pageNotFound = (req, res) => {
  res.send("404 Page not Found!!");
};
