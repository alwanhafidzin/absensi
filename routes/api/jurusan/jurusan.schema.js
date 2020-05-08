const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
  jurusan:{
     type: String,
     required: true,
     unique: true
  }
});
module.exports = model('Jurusan', scheme, 'jurusan');
