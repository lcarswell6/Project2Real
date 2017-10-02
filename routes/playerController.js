const express = require('express')
const router = express.Router({mergeParams: true})

const Schema = require('../db/schema.js');
const BrandModel = Schema.BrandModel;

//INDEX route

router.get('/', (request, response) => {
    const brandId = request.params.brandId

    BrandModel.findById(brandId)
    .then((brand) => {
        response.render('players/index', {
            brand: brand

        })
    })
        .catch((error) => {
            console.log(error)
        })
})

//SHOW route
router.get('/:playerId', (request, response) => {
    const brandId = request.params.brandId
    const playerId = request.params.playerId

    BrandModel.findById(brandId)
    .then((brand) => {
        const player  = brand.athletes.id(playerId)
        response.render('players/show', {
            player: player,
            brandId: brandId
        })
    })
    .catch((error) => {
        response.send(error)
    })
})



module.exports = router