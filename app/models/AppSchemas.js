const mongoose = require('mongoose');

const bandsSchema = new mongoose.Schema({ name: String, country: String, playlist: String });

mongoose.model('bands', bandsSchema);