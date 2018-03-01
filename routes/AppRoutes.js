const FailoverTest = require('../controller/FailoverTest')

module.exports = function(app) {

    app.get('/submit/:mail?/:subject?/:cc?/:bcc?/:emailContent?',
        FailoverTest.test
    )

}