const FailoverController = require('./FailoverController')
const MailgunController = require('./MailgunController')
const SendgridController = require('./SendgridController')

function test(req, res) {
    
    return FailoverController.sendgrid().then((data) => {

        SendgridController.sendMail(req, res)
        res.status(200).send('Your message has been sent.')
        
    }).catch((error) => {
        FailoverController.mailgun().then((data) => {

            MailgunController.sendMail(req, res)
            res.status(200).send('Your message has been sent.')

        }).catch((error) => {
            res.status(301).send(error)
        })
    })
}

module.exports.test = test;  