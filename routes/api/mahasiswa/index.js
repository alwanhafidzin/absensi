const express = require('express');
const router = express.Router();
const { auth } = require('../../../secret');
 
const c = require('./mahasiswa.controller')
const { validation,paramValidation } = require('./mahasiswa.validation')

 
router.get('/', auth, c.findAll)
router.get('/:id', auth, paramValidation, c.findById)
router.post('/insert', auth,validation, c.insert)
router.put('/update/:id', auth, paramValidation, c.updateById)
router.delete('/remove', auth, c.remove)
router.delete('/delete/:id', auth, paramValidation, c.removeById)

 
module.exports = router;
