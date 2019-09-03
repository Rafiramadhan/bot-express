const Botdata = require('../models/botdata.model.js');

// Create and Save a new Botdata
exports.create = (req, res) => {
	
	//validate
	if(!req.body) {
		return res.status(400).send({
			message: "Body can't be empty"
		});
	}

	// Create
	const botdata = new Botdata({
		name: req.body.name,
		gender: req.body.gender,
		location: req.body.location
	});

	botdata.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Error pas nyimpen"
		});
	});

};