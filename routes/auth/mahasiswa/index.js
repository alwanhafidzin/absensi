const express = require('express')
const passport = require('../../../passport')
const router = express.Router()


router.get('/login', passport.authenticate('basic', { failureRedirect:'/login' }), (req, res, next)=>{
   const user = req.user
   res.json({ currentMahasiswa: user})
})

router.get('/logout', (req, res, next)=>{
   Promise.all([req.logout(), res.clearCookie('connect.sid')])
   .then(()=>{
       res.json({ message: 'logged out!' })
   }, err=>next(err))
})
module.exports = router