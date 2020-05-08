const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
  tatap_muka:{
      type: Number,
      required: true,
      default:0
  },
  alpha:{
        type: Number,
        required: true,
        default: 0
     },
  izin:{
        type: Number,
        required: true,
        default: 0
     },
  sakit:{
     type: Number,
     required: true,
     default: 0
  },
  hadir:{
    type: Number,
    required: true,
    default: 0
 } 
});
module.exports = model('Absensi', scheme, 'absensi');
