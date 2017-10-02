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
const AthleteModel = Schema.AthleteModel;

BrandModel.remove({}, (error) => {
    console.log(error)
});


const nike  = new BrandModel({name: 'NIKE', location: "Beaverton, OR"})
const adidas = new BrandModel({name: "Adidas", location:"Herzogenaurach, Germany"})
const underArmour = new BrandModel({name: "Under Armour", location: "Baltimore, MD"})


const lbj = new AthleteModel({name:"Lebron James", sport:"Basketball", team:"Cleveland Cavaliers", shoe:"Nike Lebron XIV", price: 174.99})
const kd = new AthleteModel({name:"Kevin Durant", sport:"Basketball", team:"Golden State Warriors" , shoe:"Nike KD 10", price: 149.99})
const kyrie = new AthleteModel({name:"Kyrie Irving", sport:"Basketball", team:"Boston Celtics", shoe:"Kyrie 3", price: 119.99})

const harden = new AthleteModel({name:"James Harden", sport:"Basketball", team:"Houston Rockets", shoe:"Harden Vol. 1", price: 140})
const dRose = new AthleteModel({name:"Derrick Rose", sport:"Basketball", team:"Cleveland Cavaliers", shoe:"D Rose 8", price: 140})
const lillard = new AthleteModel({name:"Damian Lillard", sport:"Basketball", team:"Portland Trailblazers", shoe:"Dame 3", price: 115})

const cam = new AthleteModel({name:"Cam Newton", sport:"American Football", team:"Carolina Panthers", shoe:"UA CN1 MC", price: 159.99})
const steph = new AthleteModel({name:"Stephen Curry", sport:"Basketball", team:"Golden State Warriors", shoe:"UA Curry 3ZERO", price: 99.99})
const theRock = new AthleteModel({name:"Dwayne 'The Rock' Johnson", sport:"Professional Wrestling/Being a General Bad Ass", team:"n/a", shoe:"UA Project Rock Delta", price:139.99})

const brands = [nike, adidas, underArmour]

const nikeAthletes = [lbj, kd, kyrie]
const adidasAthletes = [harden, dRose, lillard]
const uaAthletes = [cam, steph, theRock]




brands.forEach((brand) => {

    nike.athletes = nikeAthletes
    adidas.athletes = adidasAthletes
    underArmour.athletes = uaAthletes
    brand.save()
    .then((brand) => {
        console.log(`${brand.name} saved`)
    }) 
    .catch((error) => {
        console.log(error)
    })
})
db.close();