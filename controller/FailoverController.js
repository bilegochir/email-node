const request = require('request');
const config = require('../config/config')

module.exports = { 
    
    mailgun: function(req, res) {

        return new Promise((resolve, reject) => {
            request.get(config.mailgun.status, function (error, response, body) {

                if (!response || response.statusCode != 200) {
                    console.log('MAILGUN SERVICE IS DOWN BUT CONTINUE : ', error)
                    reject(error)
                } else {
                    console.log('MAILGUN SERVICE WORKING : ', response.statusMessage)
                    resolve(body)
                }

            })
        })
    },
    
    sendgrid: function(req, res) {

        return new Promise((resolve, reject) => {
            request.get(config.sendgrid.status, function (error, response, body) {

                if (!response || response.statusCode != 200) {
                    console.log('SENDGRID SERVICE IS DOWN : ', error)
                    reject(error)
                } else {
                    var importedJSON = JSON.parse(body);
                    if (importedJSON.status.description == 'All Systems Operational') {
                        console.log('SENDGRID SERVICE : ', importedJSON.status.description);
                        resolve(response.statusCode);
                    }
                }
            })
        })
    }

}
