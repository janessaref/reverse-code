# Reverse Engineering Code

In this project, I am explaining and giving a walkthrough of the codebase for developers who need a better understanding of the functionality of the application.

The following files and their relationships to each other are going to be explained: 

  * config
    * middleware
        - isAuthenticated.js
    - config.json
    - passport.js
  * models
    - index.js
    - user.js
  * public
    * js
        - login.js
        - members.js
        - signup.js
    * stylesheets
        - style.css
    login.html
    members.html
    signup.html
  * routes
    - api-routes.js
    - html-routes.js
  * server.js
  * node_modules
  * .gitignore
  * package.json
  * package-lock.json

## Table of Contents

* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Dependencies Used](#dependencies-used)
* [Code Explained](#code-explained)
* [Author](#author)
* [License](#license)
* [Acknowledgments](#acknowledgments)

## Technologies Used

* [Node.js](https://nodejs.org/en/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Chalk](https://www.npmjs.com/package/chalk)

## Installation

## Dependencies Used
  
 * [bcryptjs](#)
 * [express.js](#)
 * [express-session](#)
 * [mysql2](#)
 * [passport](#)
 * [passport-local](#)
 * [sequelize](#)

## Code Explained

### Server.js

In this file, it's connecting to a server establishing a port to be used whether it's express or a localhost 8080. With using localhost, it's a great way to to test and use for development purposes to run your application on your terminal and see whether the functionality of your application is working as it is meant to on your browser and only then, an express server will run when your application is deployed and ready for production. In this file, we require files in the routes directory (html-routes.js and api-routes.js). This is also where data is being parsed so that it may be accepted and stored and in that variable set as "db" this is where the database interacts with the client. Express-session is used to keep trach of the user's login and initializes passport (a dependency that is used for user authentication).

### isAuthenticated.js

In this file, the code restricts the routes to the user. if req.user is true then returns to the next function which redirects these members to the members page otherwise they will be redirected back to the signup page.


## Author

* Janessa Reeanne Fong

- [Link to Github](https://github.com/janessaref)
- [Link to LinkedIn](https://www.linkedin.com/in/janessafong)
- [Link to Portfolio](https://janessaref.github.io/my-portfolio/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* I'd like to acknowledge my tutor Andrew Knapp.
* To my mentors and instructors, Roger Lee, Kerwin Hy, and Manuel Nunes for helping and teaching me throughout this program.
