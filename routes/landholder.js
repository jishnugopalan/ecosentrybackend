var express = require('express'),
routes = express.Router()
var landholderController=require('../controller/landholder')
routes.post('/landholder',landholderController.addUser)
module.exports = routes