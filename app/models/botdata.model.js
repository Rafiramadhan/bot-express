const mongoose = require('mongoose');

// const BotSchema = mongoose.Schema({
//     name: String,
//     gender: String,
//     location: String
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('Botdata', BotSchema);

// const BotSchema = mongoose.Schema({
//     'name': String,
//     'gender': String,
//     'location': String
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('Botdata', BotSchema);

const KFCSchema = mongoose.Schema({
	'KODE STORE': Number,
	'STORE': String,
	'NO TELP STORE': String,
	'NO TELP COMMUNITY': String,
	'ADDRESS': String,
	'City / Regency': String,
	'KLASIFIKASI STORE': String,
	'24 JAM': String,
	'MOTHERSTORE': String,
	'HD': String,
	'DT': String,
	'BIRTHDAY' : String,
	'COFFEE' : Number,
	'BREAKFAST' : String
},	{
	timestamps: true
});

module.exports = mongoose.model('KFC', KFCSchema);