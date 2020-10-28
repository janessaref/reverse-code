// this is a file provided by sequelize which is a dependency we've installed
// this indicates that the code should be executed in this mode
'use strict';

// requiring filesystem, path, sequelize, and the config.json in the config directory
// fs allows to work with the filesystem on your local machine
// path allows you to work with the file and directory paths
// requires the package sequelize that allows us to manipulate data
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
// basename is set at index.js in the models directory
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
// requires the config.json and setting the environment to development
var config = require(__dirname + '/../config/config.json')[env];
// empty object for the models
var db = {};

// if production environment set up sequelize connection else use the development environment
if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
// reads the files inside the models directory and filters the files looking specifically for js files except for the basename set at index.js and creating a new array
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })

// sets each model into the empty object which will be imported as a table
.forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

// each key in the db object will be looped through and each model that has any connections to the tables will run that associate method
Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);

    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;