module.exports = (app) => {
    const botdatas = require('../controllers/botdata.controller.js');

    // Create a new botdata
    app.post('/botdata', botdatas.create);
}