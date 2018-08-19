const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

var models = {};

models.Todo = require('./todo');

module.exports = models;
