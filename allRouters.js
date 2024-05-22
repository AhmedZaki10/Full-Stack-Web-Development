const express = require('express')
const router = express.Router()
const User = require("../models/customerSchema")
var moment = require('moment')
var userController = require('../controllers/userController')

router.get('/' , userController.user_index_get)




router.get('/edit/:id' , userController.user_edit_get)

router.get('/view/:id' , userController.user_view_get)

// router.post('/user/add.html' , (req , res) => {
//     const user = new User(req.body)
//     user.save().then(() => {
//         res.redirect('/')
//     }).catch((err) => {
//         console.log(err)
//     })
// })



// router.post('/search' , (req , res) => {
//     User.find({age : 25}).then((result) => {
//         console.log(result)
//         res.redirect('/')
//     }).catch((err) => {
//         console.log(err)
//     })
// })

router.post('/search' , userController.user_search_post)


// router.delete('/edit/:id' , (req , res) => {
//     // console.log('done')
//     User.findByIdAndDelete(req.params.id).then(() => {
//         res.redirect('/')
//     }).catch((err) => {
//         console.log(err)
//     })
// })

router.delete('/edit/:id' , userController.user_delete)


// router.put('/edit/:id' , (req , res) => {
//     User.findByIdAndUpdate(req.params.id , req.body).then(() => {
//         res.redirect('/')
//     }).catch((err) => {
//         console.log(err)
//     })
// })

router.put('/edit/:id' , userController.user_put)

module.exports = router
