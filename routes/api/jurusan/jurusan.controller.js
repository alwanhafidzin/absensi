const Jurusan = require('./jurusan.schema')
const { validationResult } = require('express-validator');
exports.findAll = (req, res, next) => {
    const where  = {}
    
    Jurusan.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .then(jurusan => {
       res.json(jurusan);
    })
    .catch(err => next(err));
   }
   exports.insert = (req, res, next) => {
    const data = req.body;
    Jurusan.create(data)
    .then(jurusan => {
       res.json({
         message: `Data Jurusan baru berhasil ditambah!`,
         data: jurusan
       });
    })
    .catch(err => next(err))
   }
   exports.findById = (req, res, next) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
    const id = req.params.id
    Jurusan.findById(id)
    .then(jurusan => {
       res.json(jurusan);
    })
    .catch(err => next(err));
   }
   exports.updateById = (req, res, next) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
    const id = req.params.id
    const data = req.body
    Jurusan.findByIdAndUpdate(id, data)
    .then(jurusan => {
       res.json({
         message: `Data Jurusan dengan:${id} berhasil diupdate!`,
         data: jurusan
       });
    })
    .catch(err => next(err))
   }
   exports.removeById = (req, res, next) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
    const id = req.params.id
    Jurusan.findByIdAndRemove(id)
    .then(jurusan => {
       res.json({
         message: `Data Jurusan dengan id:${id} berhasil dihapus!`,
         data: jurusan
       });
    })
    .catch(err => next(err))
   }
   
   exports.remove = (req, res, next) => {
    Jurusan.remove()
    .then(jurusan => {
       res.json({
         message: 'Semua data Jurusan berhasil dihapus!',
         data: jurusan
       });
    })
    .catch(err => next(err))
   }
                  