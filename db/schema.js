const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BrandSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    location: { 
        type: String,
        required: true,
    },
});

const BrandModel = mongoose.model('Brand', BrandSchema)

module.exports = {
    BrandModel: BrandModel,
}