const {Schema,model} = require('mongoose')



const menyu= new Schema({
    nameOfFood:String,
    cost:Number,
    type:String
});

menyu.methods.toJSON = function(){
    let obj = this.toObject();
    delete obj.__v;
    delete obj.id;
    return obj;
}

module.exports = model('Menyu',menyu);