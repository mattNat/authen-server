module.exports = function(app) {
  // next mostly used for network handling
  app.get('/', function(req, res, next) {
    res.send(['hiking', 'phone', 'paper']);
  });

  

}