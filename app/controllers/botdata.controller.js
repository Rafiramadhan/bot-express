const KFC = require('../models/botdata.model.js');
// const Botdata = require('../models/botdata.model.js');

// Create and Save a new Botdata
// exports.create = (req, res) => {
	
// 	//validate
// 	if(!req.body) {
// 		return res.status(400).send({
// 			message: "Body can't be empty"
// 		});
// 	}

// 	// Create
// 	const botdata = new Botdata({
// 		name: req.body.name,
// 		gender: req.body.gender,
// 		location: req.body.location
// 	});

// 	botdata.save()
// 	.then(data => {
// 		res.send(data);
// 	}).catch(err => {
// 		res.status(500).send({
// 			message: err.message || "Error pas nyimpen"
// 		});
// 	});

// };

// Read data

// exports.getAll = (req, res) => {
//     KFC.find().limit(5)
//     .then(kfc => {
//         res.send(kfc);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Error Cuy"
//         });
//     });
// };

exports.getAll = (req, res) => {
    KFC.find().limit(1)
    .then(kfc => {
        res.send(kfc);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error Cuy"
        });
    });
};

exports.getOne = (req, res) => {
    // Botdata.find(req.params.name)
    KFC.find({"STORE":{ $regex: '.*' + req.body.STORE + '.*' }}, {'_id': 0,'STORE': 1,'NO TELP STORE': 1, 'ADDRESS': 1}).limit(4)
    .then(kfc => {
        if(!kfc) {
            return res.status(404).send({
                message: "Tidak ada gerai dengan nama " + req.params.STORE
            });            
        }
        console.log(req.body.STORE);
        console.log(kfc);
        console.log(userInput);
        res.send(kfc);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Tidak ada gerai dengan nama " + req.params.STORE
            });                
        }
        return res.status(500).send({
            message: "Error aja pokoknya servernya " + req.params.STORE
        });
    });
};