const { body, param } = require('express-validator');
const { cekRolesId } = require('../roles/roles.controller')
const { findByUserOrEmail } = require('./admin.controller')
exports.validation = [
 body('username').trim().custom(value => {
   return findByUserOrEmail(value).then(user => {
     if(user){
       return Promise.reject('Username sudah terdaftar')
     }
   })
 }),
 body('nama').trim().escape(),
 body('email').isEmail().normalizeEmail().custom(value => {
   return findByUserOrEmail(value).then(user => {
     if(user){
       return Promise.reject('E-mail sudah terdaftar')
     }
   })
 }),
 body('password').isLength({ min: 5 }).withMessage('Password min 5 karakter'),
 body('role').isMongoId().custom(value => {
   return cekRolesId(value).then(role => {
     if(!role){
       return Promise.reject('Role tidak ditemukan')
     }
   })
 })
]
exports.paramValidation = [
  param('id').isMongoId().withMessage('Id belum terdaftar')
 ]
 
