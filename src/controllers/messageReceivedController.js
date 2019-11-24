const mailHandler = require('../helpers/mailHandler');

module.exports = {
    async index(req, res) {
        const { name, email, message } = req.body;

        const mail = mailHandler.generateEmail(name, email, message);

        await mailHandler.sendMail(mail);

        return res.redirect('/message-received');
    },

    sucess(req, res){
        res.render('messageReceived.html');
    }
}