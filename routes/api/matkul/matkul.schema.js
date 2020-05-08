const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
  matkul:{
     type: String,
     required: true,
     unique: true
  }
});
module.exports = model('MataKuliah', scheme, 'matakuliah');
