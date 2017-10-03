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

//NEW route 
router.get('/new', (request, response) => {
response.render('brands/new')
})

//CREATE route
router.post('/', (request, response) =>{
  
    const newBrand = request.body

    BrandModel.create(newBrand)
    .then(() =>{
        response.redirect('/brands/')
    })
    .catch((error) =>{
        console.log(error)
    })
})

//EDIT route 
router.get('/:brandId/edit', (request, response) =>{
    const brandId = request.params.brandId

    BrandModel.findById(brandId)
    .then((brand) => {
        response.render('brands/edit', {
            brand: brand
        })
    })
    .catch((error) =>{
        console.log(error)
    })
})

//UPDATE route
router.put('/:brandId', (request, response) =>{
    const brandId = request.params.brandId
    const updatedBrand = request.body

    BrandModel.findByIdAndUpdate(brandId, updatedBrand, {new: true})
    .then(() =>{
        response.redirect(`/brands/${brandId}`)
    })
    .catch((error) =>{
        console.log(error)
    })
})

//SHOW route
router.get('/:brandId', (request, response) => {
    const brandId = request.params.brandId

    BrandModel.findById(brandId)
        .then((brand) => {
            response.render('brands/show', {
                brand: brand
            })
        })
        .catch((error) => {
            console.log(error)

        })

})

//DELETE route
router.get('/:brandId/delete', (request, response) => {
    const brandId = request.params.brandId

    BrandModel.findByIdAndRemove(brandId)
    .then(() => {
        response.redirect('/brands')
    })
    .catch ((error) =>{
        console.log(error)
    })
})














module.exports = router;