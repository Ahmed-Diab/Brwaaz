const mongoose = require('mongoose');
const msgSchema = mongoose.Schema ({
       name:{
            type:String,
            required: true
        },
        email: {
            type:String,
            required: true
        },
        message : {
            type:String,
            required: true
        },
        upload_date: { 
            type: Date, 
            default: Date.now 
            }
});

const Message = module.exports = mongoose.model('Message', msgSchema);
