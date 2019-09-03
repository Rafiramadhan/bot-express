const mongoose = require('mongoose');

const BotSchema = mongoose.Schema({
    name: String,
    gender: String,
    location: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Botdata', BotSchema);
