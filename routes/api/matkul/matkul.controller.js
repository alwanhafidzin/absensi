const Matkul = require('./matkul.schema')
const { validationResult } = require('express-validator');
exports.findAll = (req, res, next) => {
    const where  = {}
    
    Matkul.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .then(matkul => {
       res.json(matkul);
    })
    .catch(err => next(err));
   }
   exports.insert = (req, res, next) => {
    const data = req.body;
    Matkul.create(data)
    .then(matkul => {
       res.json({
         message: `Data Matkul baru berhasil ditambah!`,
         data: matkul
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
    Matkul.findByIdAndUpdate(id, data)
    .then(matkul => {
       res.json({
         message: `Data Matkul dengan:${id} berhasil diupdate!`,
         data: matkul
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
    Matkul.findByIdAndRemove(id)
    .then(matkul => {
       res.json({
         message: `Data Matkul dengan id:${id} berhasil dihapus!`,
         data: matkul
       });
    })
    .catch(err => next(err))
   }
   
   exports.remove = (req, res, next) => {
    Matkul.remove()
    .then(matkul => {
       res.json({
         message: 'Semua data Matkul berhasil dihapus!',
         data: matkul
       });
    })
    .catch(err => next(err))
   }
                  