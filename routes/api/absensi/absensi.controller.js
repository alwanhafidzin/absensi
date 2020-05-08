const Absensi = require('./absensi.schema')
const { validationResult } = require('express-validator');
exports.findAll = (req, res, next) => {
    const where  = {}
    Absensi.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .then(absensi => {
       res.json(absensi);
    })
    .catch(err => next(err));
   }
   exports.insert = (req, res, next) => {    
    const data = req.body;
    Absensi.create(data)
    .then(absensi => {
       res.json({
         message: `Data Absensi baru berhasil ditambah!`,
         data: absensi
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
    Absensi.findById(id)
    .then(absensi => {
       res.json(absensi);
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
    Absensi.findByIdAndUpdate(id, data)
    .then(absensi => {
       res.json({
         message: `Data Absensi dengan:${id} berhasil diupdate!`,
         data: absensi
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
    Absensi.findByIdAndRemove(id)
    .then(absensi => {
       res.json({
         message: `Data Absensi dengan id:${id} berhasil dihapus!`,
         data: absensi
       });
    })
    .catch(err => next(err))
   }
   
   exports.remove = (req, res, next) => {
    Absensi.remove()
    .then(absensi => {
       res.json({
         message: 'Semua data Absensi berhasil dihapus!',
         data: absensi
       });
    })
    .catch(err => next(err))
   }
                  