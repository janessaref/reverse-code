// This is middleware for restricting routes a user is not allowed to visit if not logged in
// The restricted page is the members page where only users who have created accounts can access
// This is being exported to the html-routes.js
module.exports = function(req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    // the next function would run the next argument in the html-routes.js file redirecting them to the members html page once login/signup is successful
    if (req.user) {
        return next();
    }

    // If the user isn't logged in, redirect them to the login page
    return res.redirect("/");
};