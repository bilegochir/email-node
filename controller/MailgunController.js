const Mailgun = require('mailgun-js');
const config = require('../config/config')

module.exports = { 
    
    sendMail: function(req, res) {

        var mailgun = new Mailgun({apiKey: config.mailgun.api_key, domain: config.mailgun.domain});

        var data = {
            from: config.mailgun.from_who,
            to: req.query.mail,
            emailcc: req.query.emailcc,
            emailbcc: req.query.emailbcc,
            subject: req.query.subject,
            html: req.query.emailContent
        }

        mailgun.messages().send(data, function (err, body) {
            if (err) 
                console.log(err)
            else {
                console.log(body)
            }
        });
    }
}
