const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const AdminCtrl = require('./routes/api/admin/admin.controller')
const AdminSchm = require('./routes/api/admin/admin.schema')
const MahasiswaCtrl = require('./routes/api/mahasiswa/mahasiswa.controller')
const Mahasiswa = require('./routes/api/mahasiswa/mahasiswa.schema')
const { JWT_SECRET } = require('./secret')
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.serializeUser((user, done)=>{
    done(null, user);
 });
 passport.deserializeUser((obj, done)=>{
    done(null, obj);
 });
 passport.use(new BasicStrategy((username, passwd, done)=>{
    // MahasiswaCtrl.login(username, passwd).then(user => {
    //     return done(null, user, { message : 'Logged In Mahasiswa Successfully'})
    // }).catch(err=>{
    //     return done(err, null)
    // }),
    AdminCtrl.login(username, passwd).then(user => {
        return done(null, user, { message : 'Logged In Admin Successfully'})
    }).catch(err=>{
        return done(err, null)
    })
 }));
 passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : JWT_SECRET
 }, (user, done)=>{
    AdminSchm.findOne({ username: user.username }).populate('role')
    .then(foundAdmin => {
        return done(null, foundAdmin)
    })
    .catch(err => {
        return done(err, null)
    })
 }));
 
 module.exports = passport