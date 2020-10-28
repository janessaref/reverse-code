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

In this file, it's connecting to a server establishing a port to be used whether it's express or a localhost 8080. With using localhost, it's a great way to to test and use for development purposes to run your application on your terminal and see whether the functionality of your application is working as it is meant to on your browser and only then, an express server will run when your application is deployed and ready for production. In this file, we require files in the routes directory (html-routes.js and api-routes.js). This is also where data is being parsed so that it may be accepted and stored and in that variable set as "db" this is where the database interacts with the client. Express-session is used to keep track of the user's login and initializes passport (a dependency that is used for user authentication).

### isAuthenticated.js

In this file, the code restricts the routes to the user. if req.user is true then returns to the next function which redirects these members to the members page otherwise they will be redirected back to the signup page.


### html-routes.js

In this file, 

### api-routes.js

In this file, it requires the models directory if there were more than one model. It also requires passport.js in the config folder. This file is authenticating the users credentials using local strategy. Once the login is successful then the user will be redirected to the members page. This is where new users also can choose to signup and the password is automatically hashed and stored in the database. The logout route will send the user back to the main login page. If the user is logged in, they can see their date displayed as a response in the "/api/user_data/" otherwise, if they are not logged in, the user will just recieve a response of an empty object.


### config.json

In this file, this is where we list out our database information used in the development phase where we can run and test our application and its functionality so we set our SQL Workbech details such as username, password, the name of our database, the host and the dialect set as mysql. And in the production is where we set the details ready for deploying our application which is dependent on whether we launch on certain websites so if the user would like to deploy onto heroku the key value pair would be set as the following: "use_env_variable": "JAWSDB_URL",
"dialect": "mysql".

### passport.js

In this file, it requires the dependencies passport and passport-local as well as requires the database in the models. Using the local strategy is telling passport, to use certain strategies such as username/email and password. And in thi file is where the user inputs in the required fields and then it runs the function that looks for the user's credentials in the database. If the values don't exist then the user recieves a response or a message for incorrect inputs otherwise, if the login credentials are exisiting in the database then the user will be redirected to the members route. Using new LocalStrategy, we specifically want the user to use email as the input field instead of the default of setting up a username. Once authentication passes, it then makes a session and stores as a cookie so that it keeps the authentication state where users don't have to login every time to verify themselves when navigating in other parts/pages/routes in the website.

### index.js

In this file, this requires the file system, path, and sequelize. For fs it's a package the reads and writes files. For the path, it's the path of your local machine and the basename variable is grabbing the filename "index.js" found in our models directory. the config variable is importing or requiring the config.json so that we can set the env variable into development mode. To set up our database connection it utilizes an if/else statement stating that if we are on production mode, run the "use_env_variable" usually set to "JAWSDB_URL" if we were deploying the application else, the database will run on the development mode. it reads the directories and filters out the files that contain are js files and not including the basename which is the index.js file and creates a new array. The next function is running through each file in the models directory and then storing it into the empty db obect. It allows to keep models in separate files and add new models if any.

### user.js

In this file, it requires the bcryptjs package which hashes the user's password. This is where we create the table named Users using sequelize and the columns included are email and password. For each of the columns, there are settings we put such as validation, unique values, type of data, etc.

In this file, there is a method for the user model where it compares the values of the user's input to the encrypted password stored in the database.

The addHook is just setting  of when we prefer to start encrypting the user's password and this case, we set it as "beforeCreate".



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
