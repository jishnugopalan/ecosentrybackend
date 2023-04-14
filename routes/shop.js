var express = require('express'),
routes = express.Router()
var shopController=require('../controller/shop')
routes.post('/shop',shopController.addUser)
routes.post('/getshopbyuserid',shopController.getShopByUserid)
module.exports = routes