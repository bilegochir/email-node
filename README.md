# NodeJS backend application for EmailApp

> Email sending application that accepts the necessary information and sends emails

## Built With

* [NodeJS](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express](https://expressjs.com/) - Backend framework
* [MailgunJS](https://www.npmjs.com/package/mailgun-js) - Mail Service for the MailGun API
* [Sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail) - Mail Service for the Sendgrid v3 Web API

## How to run on your local machine

API config files are excluded from repository for security reasons. (/config)

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start

```

## How to deploy to the Heroku server

``` bash

# install heroku CLI

# Log in using the email address and password you used when creating your Heroku account:
heroku login

# update the remote’s details
heroku git:remote -a powerful-forest-33021

# add to git
git add .
git commit -m 'Commit message'

# now deploy your code
git push heroku master

# restart heroku server (optional)
heroku restart

# open the deployed application
heroku open

```

## TODO list

- [ ] Improve mail service status check
- [ ] Need to improve failover functionality
- [ ] Unit testing
