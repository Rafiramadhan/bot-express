module.exports = (app) => {
    // const botdatas = require('../controllers/botdata.controller.js');
    const kfcs = require('../controllers/botdata.controller.js');

    // Create a new botdata
    // app.post('/botdata', botdatas.create);


    // Read data
    app.get('/getdata', kfcs.getAll)

    // Read spesific
    app.get('/getadd', kfcs.getOne)
}