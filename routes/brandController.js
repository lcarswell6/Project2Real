const express = require('express')
const router = express.Router()

const Schema = require('../db/schema.js');
const BrandModel = Schema.BrandModel;

//INDEX route 
router.get('/', (request, response) => {

    BrandModel.find({})
        .then((brands) => {
            response.render('brands/index', {
                brands: brands
            })
        })
        .catch((error) => {
            console.log(error)
        })
})
















module.exports = router;