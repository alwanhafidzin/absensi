const { body, param } = require('express-validator');
const { findByNim } = require('./mahasiswa.controller')
exports.validation = [
body('nim').isInt().withMessage('Nim tidak valid').trim().custom(value => {
   return findByNim(value).then(nim => {
     if(nim){
       return Promise.reject('Nim sudah terdaftar')
     }
   })
 }),
 body('nama').trim().escape(),
 body('password').isLength({ min: 5 }).withMessage('Password harus diisi,min 5 karakter')
]
exports.paramValidation = [
  param('id').isMongoId().withMessage('Id belum terdaftar')
 ]
 
