require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;


db.on('error', (error) =>{
    console.log(error);
});

db.once('open', () => {
console.log("connected to mongoDB")
})

const Schema = require("./schema.js")

const BrandModel = Schema.BrandModel;

BrandModel.remove({}, (error) => {
    console.log(error)
});


const nike  = new BrandModel({name: 'NIKE', location: "Beaverton, OR"})
const adidas = new BrandModel({name: "Adidas", location:"Herzogenaurach, Germany"})
const underArmour = new BrandModel({name: "Under Armour", location: "Baltimore, MD"})


const brands = [nike, adidas, underArmour]

brands.forEach((brand) => {
    brand.save()
    .then((brand) => {
        console.log(`${brand.name} saved`)
    }) 
    .catch((error) => {
        console.log(error)
    })
})
db.close();