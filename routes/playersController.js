const express = require('express')
const router = express.Router()

const Schema = require("../db/schema.js");
const BrandModel = Schema.BrandModel;

//INDEX route

router.get('/', (request, response) => {
    const brandId = request.params.brandId

    BrandModel.findById(brandId)
    then((brand) => {
        response.render('players/index', {
            brand: brand

        })
    })
        .catch((error) => {
            console.log(error)
        })
})

