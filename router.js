const Authentication = require('./controllers/authentication');

module.exports = function(app) {
  // next mostly used for network handling
  app.post('/signup', Authentication.signup);
  
}