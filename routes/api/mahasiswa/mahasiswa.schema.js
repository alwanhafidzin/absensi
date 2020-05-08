const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
  nim:{
     type: Number,
     required: true,
     unique: true
  },
  nama:{
     type: String,
     required: true,
  },
  password: {
    type: String,
    required: true
  },
  jurusan:{
    type: Schema.Types.ObjectId,
    ref: 'Jurusan', select:true
  },
  matkul:{
    type: Schema.Types.ObjectId,
    ref: 'MataKuliah', select:true
  },
  absensi:{
    type: Schema.Types.ObjectId,
    ref: 'Absensi', select:true
  },
  
});
module.exports = model('Mahasiswa', scheme, 'mahasiswa');
