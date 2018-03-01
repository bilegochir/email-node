const sgMail = require('@sendgrid/mail');
const config = require('../config/config')


module.exports = { 

    sendMail: function(req, res) {

        sgMail.setApiKey(config.sendgrid.api_key)

        const msg = {
            personalizations: [
            {
                to: req.query.mail,
                subject: req.query.subject,
            }
            ],
            cc: req.query.emailcc,
            bcc: req.query.emailbcc,
            from: config.sendgrid.from_who,
            html: req.query.emailContent,
            mail_settings: {
                "sandbox_mode": {
                    "enable": false
                }
            }
        };

        sgMail.send(msg, (err, json) => {
            if(err) 
                console.log(err)
            else 
                console.log('done')
        })
    }
}