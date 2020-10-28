// Requiring necessary npm packages
// express is a backend framework that lets the frontend and backend interact
// express-sessions gives the user a unique session
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
// used for post and put requests allowing server to accept and store those data objects, parsing the different requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// looks for the files inside the public directory
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
// creates a session for the user on the backend and returns a session ID to the user 
// when a cookie is assigned to the user, it is assigned with a secret that basically hashes the cookies so other users have no access to it
// resave determines whether a session should be updated 
// saveUnitialized creates a cookie and session for a user even if they are not logged in
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// the user will be able to use its cookie and its value to access data on their specific unique session
// initializes passport to allow to use local strategies
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});