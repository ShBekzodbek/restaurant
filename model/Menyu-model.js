const {Schema,model} = require('mongoose')



const menyu= new Schema({
    nameOfFood:String,
    cost:Number,
    type:String
});

module.exports = model('Menyu',menyu);