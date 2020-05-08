const { param } = require('express-validator');
exports.paramValidation = [
    param('id').isMongoId().withMessage('Id belum terdaftar')
   ]