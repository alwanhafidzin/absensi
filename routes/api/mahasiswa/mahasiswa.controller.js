const Mahasiswa = require('./mahasiswa.schema')
const passwordHash = require('password-hash');
const createError = require('http-errors')
const { validationResult } = require('express-validator');
 
exports.findAll = (req, res, next) => {
 const q = req.query;
 const where  = {}
 Mahasiswa.find(where)
 .limit(req.query.limit || 0)
 .skip(req.query.skip || 0)
 .populate('jurusan')
 .populate('matkul')
 .populate('absensi')
 .then(mahasiswa => {
    res.json(mahasiswa);
 })
 .catch(err => next(err));
}
 
exports.findById = (req, res, next) => {
const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
 const id = req.params.id
 Mahasiswa.findById(id)
 .populate('jurusan')
 .populate('matkul')
 .populate('absensi')
 .then(mahasiswa => {
    res.json(mahasiswa);
 })
 .catch(err => next(err));
}
 
exports.insert = (req, res, next) => {
 const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
   
 let data = req.body;
 data.password = passwordHash.generate(data.password);
 Mahasiswa.create(data)
 .then(mahasiswa => {
    res.json({
      message: `New Mahasiswa added!`,
      data: mahasiswa
    });
 })
 .catch(err => next(err))
}
 
exports.updateById = (req, res, next) => {
const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
 const id = req.params.id
 const data = req.body
 if(req.body.password) data.password = passwordHash.generate(req.body.password);
 
 Mahasiswa.findByIdAndUpdate(id, data)
 .then(mahasiswa => {
    res.json({
      message: `Mahasiswa ${id} updated!`,
      data: mahasiswa
    });
 })
 .catch(err => next(err))
}
 
exports.remove = (req, res, next) => {
 Mahasiswa.remove()
 .then(mahasiswa => {
    res.json({
      message: 'All Mahasiswa removed!',
      data: mahasiswa
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
 Mahasiswa.findByIdAndRemove(id)
 .then(mahasiswa => {
    res.json({
      message: `Mahasiswa ${id} removed!`,
      data: mahasiswa
    });
 })
 .catch(err => next(err))
}

exports.login = (nim, password)=>{
    return new Promise((resolve, reject)=>{
        Mahasiswa.findOne({ nim })
        .select('_id password nim nama jurusan matkul absensi')
        .populate('jurusan')
        .populate('matkul')
        .populate('absensi')
        .then((foundMahasiswa)=>{
            if(!foundMahasiswa) return reject(createError(400, 'Username not found!'))
            const hashedPassword = foundMahasiswa.password
            const isValidPassword = passwordHash.verify(password, hashedPassword)
            if (isValidPassword) {
              resolve(foundMahasiswa)
            } else {
              reject(createError(400, 'Wrong Password!'))
            }
        })
    })
   }

exports.findByNim = (value) => {
  return Mahasiswa.findOne({$or: [{ nim: value}]})
 }  
