const express = require('express')
const fs = require('fs')
const projectName = process.env.npm_package_name
const debug = require('debug')(`${projectName}:auth`)
const router = express.Router()
const files = fs.readdirSync(__dirname)
 
files.forEach(endpoint=>{
 if(endpoint!='index.js') {
     debug(endpoint);
     router.use(`/${endpoint}`, require(`./${endpoint}`))
 }
})
 
module.exports = router
