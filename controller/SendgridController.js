const sgMail = require('@sendgrid/mail');
const config = require('../config/config')


module.exports = { 

    sendMail: function(req, res) {

        sgMail.setApiKey(config.sendgrid.api_key)

        var arrayEmail = req.query.mail.split(',');
        var arrayCC = req.query.emailcc.split(',');
        var arrayBCC = req.query.emailbcc.split(',');

        arrayEmail = arrayEmail.filter(function(val) {
            return arrayCC.indexOf(val) == -1;
        });

        arrayEmail = arrayEmail.filter(function(val) {
            return arrayBCC.indexOf(val) == -1;
        });

        arrayCC = arrayCC.filter(function(val) {
            return arrayBCC.indexOf(val) == -1;
        });

        const msg = {
            personalizations: [{
                "to": arrayEmail,
                "cc": arrayCC,
                "bcc": arrayBCC
            }],
            subject: req.query.subject,
            from: config.sendgrid.from_who,
            html: req.query.emailContent,
            mail_settings: {
                "sandbox_mode": {
                    "enable": false
                }
            }
        }

        console.log(msg)

        sgMail.send(msg, (err, json) => {
            if(err) 
                console.log(err)
            else 
                console.log('done')
        })
    }
}