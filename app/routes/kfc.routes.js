module.exports = (app) => {
    const kfcs = require('../controllers/kfc.controller.js');

    app.get('/getadd', kfcs.getOne)
}