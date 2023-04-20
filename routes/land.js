var express = require('express'),
routes = express.Router()
var landController=require('../controller/land')
routes.post('/addland',landController.addLand)
routes.post('/viewall-land',landController.viewAllLand)
routes.post('/view-land',landController.viewLand)
routes.post('/connect-land',landController.connectLand)
routes.post('/view-landby-landowner',landController.viewLandByLandOwner)
routes.post('/view-landconnectby-landowner',landController.viewLandConnectByLandOwner)
routes.post('/update-landstatus',landController.updateLandConnectStatus)
routes.post('/view-landcoonectby-customer',landController.viewLandConnectByCustomer)
module.exports = routes