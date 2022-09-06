const express = require('express')
const costumerRouter = express.Router();
const {getMenyu, getFoodById,getFoodByCost} = require('../controller/chief-controller')


costumerRouter.get('/', getMenyu);//ishladi
costumerRouter.get('/:id', getFoodById);//ishladi
costumerRouter.get('/meal/:cost',getFoodByCost);


module.exports = costumerRouter;