const express = require('express')
const router = express.Router();
const {getMenyu,updateFood,deleteFood,addFood, getFoodById,getFoodByCost} = require('../controller/chief-controller')
const validationMiddleware = require('../middlewares/validationMiddleware');
const MenuValidator = require('../validation/menuValidator');

router.get('/', getMenyu);//ishladi
router.get('/:id', getFoodById);//ishladi
router.post('/add',validationMiddleware(MenuValidator.create), addFood);//ishladi
router.put('/:id', updateFood);//ishladi
router.delete('/:id',deleteFood );//ishladi
router.get('/meal/:cost',getFoodByCost);

module.exports = router;