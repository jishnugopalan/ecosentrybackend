var express = require('express'),
routes = express.Router()
var landController=require('../controller/land')
routes.post('/land',landController.addUser)
module.exports = routes