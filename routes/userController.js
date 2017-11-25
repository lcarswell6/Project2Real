var express = require('express');
var router = express.Router();
const Schema = require('../db/schema.js');
const UserModel = Schema.UserModel;

//index
router.get('/', (request, response) => {
  UserModel.find({})
    .then((users) => {
      response.render('users/index', {
        users: users
      })
    })
    .catch((error) => {
      console.log(error)
    })
});

//new
router.get('/new', (request, response) => {
  response.render('users/new')
})

//create
router.post('/', (request, response) => {
  const newUser = request.body

  UserModel.create(newUser)
  .then(() => {
    response.redirect('/users/')
  })
  .catch((error) => {
    console.log(error)
  })
})

//edit
router.get('/:userId/edit', (request, response) => {
  const userId = request.params.userId

  UserModel.findById(userId)
  .then((user) => {
    response.render('users/edit', {
      user: user
    })
  })
  .catch((error) => {
    console.log(error)
  })
})

//update
router.put('/:userId', (request, response) => {
  const userId = request.params.userId
  const updateUser = request.body

  UserModel.findByIdAndUpdate(userId, updateUser, {new: true})
  .then(() =>{
    response.redirect(`/users/${userId}`)
  })
  .catch((error) => {
    console.log(error)
  })
})

//show
router.get('/:userId', (request, response) => {
  const userId = request.params.userId

  UserModel.findById(userId)
  .then((user) =>{
    response.render('users/show', {
      user: user
    })
  })
  .catch((error) =>{
    console.log(error)
  })
})

//delete
router.get('/:userId/delete', (request, response) => {
  const userId = request.params.userId

  UserModel.findByIdAndRemove(userId)
  .then(()=>{
    response.redirect('/users')
  })
  .catch((error) => {
    console.log(error)
  })
})
module.exports = router;
