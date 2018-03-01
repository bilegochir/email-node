const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/AppRoutes')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded ({ extended: true}))
app.use(bodyParser.json())
app.use(cors())

routes(app);

app.get('/', function(req, res) { 
    res.send(`Server is running on ${port}`)
})

app.listen(port, () => 
    console.log(`EmailApp running on ${port}`))
