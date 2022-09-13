const {Schema,model} = require('mongoose')



const menyu= new Schema({
    nameOfFood: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 60
    },
    cost: {
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 15,
    },
    type: {
        type: String,
        required: true,
        enum: ['M', 'F'],
        minlength: 3,
        maxlength: 60

    },
    author: {
        name: String,
        surname: String,
        phone: {
            type: String,
            trim: true,
            minlength: 8,
            maxlength: 25
        },
        email: String
    },
    publishedDate: {
        type: [{ date: Date, default: new Date() }],
    }
});

menyu.methods.toJSON = function(){
    let obj = this.toObject();
    delete obj.__v;
    delete obj.id;
    return obj;
}

module.exports = model('Menyu',menyu);