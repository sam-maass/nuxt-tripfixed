module.exports = function(req, res, next) {
  let redirect;
  if (req.url !== "/") {
    redirect = "https://app.tripfixed.com" + req.url;
  }
  if (redirect) {
    res.writeHead(301, { Location: redirect });
    res.end();
  } else {
    next();
  }
};
