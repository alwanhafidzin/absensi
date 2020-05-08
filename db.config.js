const mongoose = require('mongoose')
const url = `mongodb://localhost:27017`
const debug = require('debug')(`absensi:mongoose`)
let retry = 0;
const db = mongoose.connection
const options = {
 useFindAndModify: false,
 useNewUrlParser: true,
 useUnifiedTopology: true,
 dbName: 'absensi',
 user: '',
 pass: '',
}
 
function onMongoError(err){
 if(err) {
   const { name, errorLabels } = err;
   debug(`${name}: ${errorLabels}`)
   if(retry<3) {
     retry+=1
     debug(`DB connection retrying: ${retry} attempt`)
     setTimeout(()=>{
       exports.connect()
     }, 3000)
   }
   if(retry==3) {
     console.log('Mongoose connection is disconnected due to failed to connect 3 times');
     mongoose.disconnect()
     process.exit(1)
   }
 } else {
   retry = 0
 }
}
db.once('open',()=> debug('Database connected!'))
 
exports.url = url
exports.connect = ()=>{
 debug('Try connection...')
 mongoose.connect(url, options, onMongoError);
}
exports.connection = mongoose.connection
exports.Schema = mongoose.Schema
exports.model = mongoose.model
