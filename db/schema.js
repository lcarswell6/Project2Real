const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BrandSchema = new Schema ({
    name: {
        String,
        required: true,
    },
    location: { 
        String,
        required: true,
    },
});

const BrandModel = mongoose.model('Brand', BrandSchema)

module.exports = {
    BrandModel: BrandModel,
}