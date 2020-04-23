const KFC = require('../models/kfc.model.js');

exports.getOne = (req, res) => {
    var userInput = req.body.STORE.toUpperCase();
    KFC.find({"STORE":{ $regex: '.*' + userInput + '.*' }}, {'_id': 0,'STORE': 1,'NO TELP STORE': 1,'NO TELP COMMUNITY': 1, 'ADDRESS': 1}).limit(4)
    .then(kfc => {
        if(!kfc) {
            return res.status(404).send({
                message: "Tidak ada gerai dengan nama " + req.body.STORE
            });            
        }
        console.log(req.body.STORE);
        console.log(userInput);
        console.log(kfc);
        res.send(kfc);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Tidak ada gerai dengan nama " + req.body.STORE
            });                
        }
        return res.status(500).send({
            message: "Error aja pokoknya servernya " + req.body.STORE
        });
    });
};