const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
  name:{
     type: String,
     enum:['rektorat','akademik'],
     lowercase: true,
     required: true,
  },
  name_long:{
     type: String,
     required: false,
     default:null
  },
  priority:{
     type: Number,
     required: true,
     default: 2
  },
  description: {
     type: String,
     required: false
  }
});
module.exports = model('Roles', scheme, 'roles');
