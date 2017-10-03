const express = require('express')
const router = express.Router({ mergeParams: true })

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

//NEW route
router.get('/new', (request, response) => {
    const brandId = request.params.brandId
    response.render('players/new', {
        brandId: brandId
    })
})

//CREATE route
router.post('/', (request, response) => {
    const brandId = request.params.brandId
    const newPlayer = request.body

    BrandModel.findById(brandId)
        .then((brand) => {
            brand.athletes.push(newPlayer)
            return brand.save()
        })
        .then((brand) => {
            response.redirect(`/brands/${brandId}/players`)
        })
        .catch((error) =>{
            console.log(error)
        })
})

//EDIT route
router.get('/:playerId/edit', (request, response) => {
    const brandId = request.params.brandId
    const playerId = request.params.playerId

    BrandModel.findById(brandId)
        .then((brand) => {
            const player = brand.athletes.id(playerId)
            response.render('players/edit', {
                player: player,
                brandId: brandId
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

//UPDATE route
router.put('/:playerId', (request, response) => {
    const brandId = request.params.brandId
    const playerId = request.params.playerId
    const updatedPlayer = request.body

    BrandModel.findById(brandId)
        .then((brand) => {
            const player = brand.athletes.id(playerId)

            player.name = updatedPlayer.name
            player.sport = updatedPlayer.sport
            player.team = updatedPlayer.team
            player.shoe = updatedPlayer.shoe
            player.price = updatedPlayer.price

            return brand.save()

        })
        .then(() => {
            response.redirect(`/brands/${brandId}/players/${playerId}`)
        })
        .catch((error) =>{
            console.log(error)
        })
})
//SHOW route
router.get('/:playerId', (request, response) => {
    const brandId = request.params.brandId
    const playerId = request.params.playerId

    BrandModel.findById(brandId)
        .then((brand) => {
            const player = brand.athletes.id(playerId)
            response.render('players/show', {
                player: player,
                brandId: brandId
            })
        })
        .catch((error) => {
            response.send(error)
        })
})

//DELETE route
router.get('/:playerId/delete', (request, response) => {
    const brandId = request.params.brandId
    const playerId = request.params.playerId

    BrandModel.findById(brandId)
        .then((brand) => {
            const player = brand.athletes.id(playerId).remove()
            return brand.save()
        })
        .then(() => {
            response.redirect(`/brands/${brandId}/players`)
        })
        .catch((error) => {
            console.log(error)
        })
})


module.exports = router