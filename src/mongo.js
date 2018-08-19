const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/mongo')[env];

module.exports = () => {
  return mongoose.connect(
    `mongodb://${ config.host }/${ config.database }`,
    { useNewUrlParser: true }
  );
};
