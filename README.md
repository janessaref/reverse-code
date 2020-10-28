# Reverse Engineering Code

In this project, I am explaining and giving a walkthrough of the codebase for developers who need a better understanding of the functionality of the application with enough detail. The following files and their relationships to each other are going to be explained. 

This is an application wherein users can login with their email and password or signup as a new user and this creates a unique session for each user. This is a walkthrough that explains how to use the dependecy Passport which authenticates users. As well as, we are using sequelize to create our table in our database, in my case, I am using MySQL Workbench to store the user's credentials as well as requiring a bcryptjs package that encrypts the password of the user to ensure their data is secure and safe within the database that cannot be read by anyone else.

This is the directory structure:

```
.
├── config
│   ├── middleware
│   │     └── isAuthenticated.js
│   ├── config.json
│   └── passport.js         
│ 
├── models
│   ├── index.js
│   └── user.js
│
├── node_modules
│
├── public
│   ├── js
│   │   ├── login.js
│   │   ├── members.js
│   │   └── signup.js
│   │ 
│   ├── stylesheets  
│   │    └── style.css     
│   ├── login.html  
│   ├── members.html  
│   └── signup.html
│
├── routes
│   ├── api-routes.js
│   └── html-routes.js
│ 
├── .gitignore
│ 
├── package-lock.json
│
├── package.json
│
├── README.md  
│
└── server.js
```

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
* [jquery](https://jquery.com/)
* [MySQL](https://www.mysql.com/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Installation

### package.json

This is a file that has all the dependencies saved and other credentials. If this does not exist, you would use the following code in your terminal at the correct directory:

``` npm init -y ```
* -y is saying yes to everything

You would want to install the following dependencies if you are creating a new package.json file

``` npm install bcryptjs --save ```

``` npm install express --save ```

``` npm install express-session --save ```

``` npm install mysql2 --save ```

``` npm install passport --save ```

``` npm install passport-local --save ```

``` npm install passport-sequelize --save ```

otherwise, if this file exists run the following code:

``` npm install ```

### node_modules

Once the installation process is successful, this will exist containing the installed dependencies and this should be added into the .gitignore file that you will be creating.

### package-lock.json

This is automatically generated as well once when the installation process succeeded. This is locking the dependencies to a specific version.

### .gitignore

This file ignores certain files for other developers/users if they would like to clone down your repository. .DS_Store are specifically for mac users and node_modules, you would want to ignore because packages can have updated versions. The following files should be added into this file:

``` 
.DS_Store
node_modules
package-lock.json
```

Once the set up process is done, you can run the following code: 

```
node server.js
```
It should be listening to a PORT number that has been set through express or locally on localhost: 8080 

To do this locally, be sure to edit the config.json file to your database credentials and create a database on your MySQL Workbench and run it with these lines:

DROP DATABASE IF EXISTS passport_demo;
CREATE DATABASE passport_demo;

## Dependencies Used
  
 * [bcryptjs](https://www.npmjs.com/package/bcrypt)
 * [Express.js](https://expressjs.com/)
 * [express-session](https://www.npmjs.com/package/express-session)
 * [mysql2](https://www.npmjs.com/package/mysql2)
 * [passport](http://www.passportjs.org/docs/authenticate/)
 * [passport-local](http://www.passportjs.org/packages/passport-local/)
 * [sequelize](https://sequelize.org/v3/)

## Code Explained

### Server.js

In this file, it's connecting to a server establishing a port to be used whether it's express or a localhost 8080. With using localhost, it's a great way to to test and use for development purposes to run your application on your terminal and see whether the functionality of your application is working as it is meant to on your browser and only then, an express server will run when your application is deployed and ready for production. 

In this file, we also require dependecies, other files as well as our routes in the routes directory (html-routes.js and api-routes.js). Express-session is used to keep track of the user's login and initializes passport (a dependency that is used for user authentication).

### config.json

In this file, this is where we list out our database information used in the development phase where we can run and test our application and its functionality. We set our SQL Workbech details such as username, password, the name of our database, the host and the dialect set as mysql. And in the production is where we set the details ready for deploying our application which is dependent on whether we launch on certain websites so if the user would like to deploy onto heroku the key value pair would be set in the production object as the following: 
```
"production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
}
```

### login.js, members.js, signup.js

These files contain the functionality of buttons, input fields, etc. that creates the interaction with the user. It listens for events and interacts with routes and other pages when the user clicks on certain parts of the page. These files are hooked onto certain tags/IDs/classes in the html files. 

### login.html, members.html, signup.html

These files display the design and layout of each of the pages of the application. It's the main skeleton that contains tags, hooks (for the js files) and is linked to stylesheets and scripts.

### style.css

This file is linked to the html pages where you can add more customization on styling and design on each of those html pages.

### html-routes.js

In this file, it requires the path for the reason that it will be using the relative routes to the HTML files in the public directory. It also requires the file in the middleware directory for checking if the user has logged in. 

This is where that if the user has an account and successfully logs in or signs up, then the user will be sent to the members page which is the equivalent path of our members.html found in the public directory otherwise, they will be sent back to the signup.html page if they are signing up as a new user and the inputs are invalid or the login.html page if their login credentials don't match with the ones stored in the database. 

As for the members page, the middleware is being passed as the second argument where it restricts the access to non-members who try to go into the members route/page but will be redirected back into the signup html page. In that middleware, if the user exists and logs in, it calls the next function sending them to the html page for members which is the next argument And this is being exported to be required by server.js file.

### isAuthenticated.js

In this file, the code restricts the routes to the user. if user successfully logs in, then execute the next function function then redirects the user to the members page otherwise they will be redirected back to the signup page. This is being required by the file "html-routes.js" to access and execute the authentication process.

### api-routes.js

In this file, it requires the models directory as a whole if there was more than one model. This file is where we can find the post and get requests. 

This file requires the passport.js file in the config folder. This file is authenticating the users credentials using local strategy. If the user's login is valid and successful, they will be redirected to the members page otherwise they will be sent an error if either the username or password input was wrong. This is where new users also can choose to signup and the password is automatically hashed and stored in the database. When the user is logged in, they can see their date displayed as a response in the "/api/user_data/" otherwise, if they are not logged in, the user will just recieve a response of an empty object. This file is where it will grab the data from post requests of the user to be stored in the database and the get requests is where it displays the information to the page. The logout route will send the user back to the main login page. This file is being used by server.js to run the appropriate routes.

### passport.js

In this file, it requires the dependencies passport and passport-local and requires the models directory. Using local strategy, it is telling passport, to use certain strategies such as username/email and password. And in this file, it is where the user inputs in the required fields and then it runs the function that looks for the user's credentials in the database. If the values don't exist then the user recieves a response or a message for incorrect inputs otherwise, if the login credentials exist in the database then the user will be redirected to the members route. Using new LocalStrategy, we specifically want the user to use email as the input field instead of the default of setting up a username. Once authentication passes, it then makes a session and stores as a cookie so that it keeps the authentication state where users don't have to login every time to verify themselves when navigating in other parts/pages/routes in the website. This is file is being required by "api-routes.js".

### index.js

This is a file that is created and provided by Sequelize which is a dependency. In this file, this requires the file system, path, and sequelize. For fs it's a package the reads and writes files. For the path, it's the respective paths of your local machine and the basename variable is grabbing the filename "index.js" found in our models directory. The config variable is importing or requiring the "config.json" file so that we can set the env variable into development mode. To set up our database connection it utilizes an if/else statement stating that if we are on production mode, run the "use_env_variable" usually set to "JAWSDB_URL" if we were deploying the application else, the database will run on the development mode. 

It reads the directories and filters out the files that contain are js files and not including the basename which is the "index.js" file and creates a new array. 

It is then running through each file in the models directory and then storing it into the empty db object. This boiler plate file allow us to manipulate data.

### user.js

In this file, it requires the bcryptjs package which hashes the user's password. This is where we create our User model so this is creating the table named Users with sequelize and the columns included are email and password. For each of the columns, there are settings we put such as validation, unique values, type of data, etc. This table data even if not seen on the script itself, sequelize creates ids that auto increments as well as datetime.

In this file, there is a method for the user model where it compares the values of the user's input in the password field to the encrypted password stored in the database.

The addHook is just setting when do we prefer to start encrypting the user's password and in this case, we set it as "beforeCreate" so even before the user is created, the password is hashed automatically. This file is being required by "passport.js", "api-routes.js" and "server.js".

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
