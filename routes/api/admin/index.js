const express = require('express');
const router = express.Router();
const { auth } = require('../../../secret');
const { validation,paramValidation } = require('./admin.validation')
 
const c = require('./admin.controller')
 
router.get('/', auth, c.findAll)
router.get('/:id', auth, paramValidation , c.findById)
router.post('/insert', auth, validation , c.insert)
router.put('/update/:id', auth, paramValidation, c.updateById)
router.delete('/remove', auth, c.remove)
router.delete('/delete/:id', auth, paramValidation, c.removeById)

 
module.exports = router;
