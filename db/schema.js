const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AthleteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
    team: {
        type: String,
    },
    shoe: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,

    }
})


const BrandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    athletes: [AthleteSchema]
});

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    }, 
    favoriteBrand: {
        type: String, 
        required: false
    }
})

const BrandModel = mongoose.model('Brand', BrandSchema)
const AthleteModel = mongoose.model('Athlete', AthleteSchema)
const UserModel = mongoose.model('User', UserSchema)
module.exports = {
    BrandModel: BrandModel,
    AthleteModel: AthleteModel,
    UserModel: UserModel
}