const Admin = require('./admin.schema')
const passwordHash = require('password-hash');
const createError = require('http-errors')
const { validationResult } = require('express-validator');
 
exports.findAll = (req, res, next) => {
 const q = req.query;
 const where  = {}
 Admin.find(where)
 .limit(req.query.limit || 0)
 .skip(req.query.skip || 0)
 .populate('role')
 .then(admin => {
    res.json(admin);
 })
 .catch(err => next(err));
}
 
exports.findById = (req, res, next) => {
const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
 const id = req.params.id
 Admin.findById(id)
 .populate('role')
 .then(admin => {
    res.json(admin);
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
 Admin.create(data)
 .then(admin => {
    res.json({
      message: `New admin added!`,
      data: admin
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
 
 Admin.findByIdAndUpdate(id, data)
 .then(admin => {
    res.json({
      message: `Admin ${id} updated!`,
      data: admin
    });
 })
 .catch(err => next(err))
}
 
exports.remove = (req, res, next) => {
 Admin.remove()
 .then(admin => {
    res.json({
      message: 'All Admin removed!',
      data: admin
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
 Admin.findByIdAndRemove(id)
 .then(admin => {
    res.json({
      message: `Admin ${id} removed!`,
      data: admin
    });
 })
 .catch(err => next(err))
}
exports.findByUserOrEmail = (value) => {
    return Admin.findOne({$or: [{ username: value}, { email: value}]})
   }   
exports.login = (username, password)=>{
    return new Promise((resolve, reject)=>{
        Admin.findOne({ username })
        .select('_id password email nama username role')
        .populate('role')
        .then((foundAdmin)=>{
            if(!foundAdmin) return reject(createError(400, 'Username not found!'))
            const hashedPassword = foundAdmin.password
            const isValidPassword = passwordHash.verify(password, hashedPassword)
            if (isValidPassword) {
              resolve(foundAdmin)
            } else {
              reject(createError(400, 'Wrong Password!'))
            }
        })
    })
   }
   
