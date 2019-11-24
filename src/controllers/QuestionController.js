const nodeMailer = require('nodemailer');
const mailHandler = require('../helpers/mailHandler');

module.exports = {
    async index(req, res) {
        const { name, email, message } = req.body;

        const mail = mailHandler.generateEmail(name, email, message);

        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'marcelo.victor05@gmail.com',
                pass: 'arsenalvic'
            }
        });

        const mailOptions = {
            from: 'marcelo.victor05@gmail.com',
            to: 'vituwot@gmail.com',
            subject: `Zabbix Reports possui uma nova pergunta!`,
            html: mail
        };

        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error.message);
            }
            
            return res.redirect('/message-received');
        });
    }
}