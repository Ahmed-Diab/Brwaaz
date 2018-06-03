const mongoose = require('mongoose');


const imageSchema = mongoose.Schema ({
        alt:{
            type:String,
            required: true
        },
        original_image: {
            type:String,
            required: true
        },
        small_image : {
            type:String,
            required: true
        },
        category:{
            type:String,
            required: true
        },
        sp_category:{
            type:String,
            required: true
        },
        uplode_data: { 
            type: Date, 
            default: Date.now 
            }
});

const Image = module.exports = mongoose.model('Image', imageSchema);
