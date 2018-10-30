const mongoose = require('mongoose');

const dbURI = 'mongodb://' + escape(process.env.DB_USER || 'user') + ':' + escape(process.env.DB_PASSWORD || 'password') + '@ds119663.mlab.com:19663/bands_corner';

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

require('./AppSchemas');