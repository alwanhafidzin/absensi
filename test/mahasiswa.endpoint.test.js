// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// var expect = chai.expect;
 
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
 
// // describe("Mahasiswa Endpoint", ()=> {
// //  it("should be unauthorized to get all mahasiswa without token", (done) => {
// //    chai.request(server)
// //    .get('/api/mahasiswa')
// //    .end((err, res) => {
// //      res.should.have.status(401);
// //      done();
// //    });
// //  });
// //  it("should be unauthorized to insert new mahasiswa without token", (done) => {
// //    chai.request(server)
// //    .post('/api/mahasiswa/insert')
// //    .end((err, res) => {
// //      res.should.have.status(401);
// //      done();
// //    });
// //  });
// //  it("should be not found update mahasiswa without id", (done) => {
// //    chai.request(server)
// //    .put('/api/mahasiswa/update')
// //    .end((err, res) => {
// //      res.should.have.status(404);
// //      done();
// //    });
// //  });
// //  it("should be unauthorized to delete mahasiswa without token", (done) => {
// //    chai.request(server)
// //    .delete('/api/mahasiswa/delete/:id')
// //    .end((err, res) => {
// //      res.should.have.status(401);
// //      done();
// //    });
// //  });
// // })

// // let token;
// // describe("Login Admin", ()=> {
// //  it("should return token", (done) => {
// //    chai.request(server)
// //    .get('/auth/admin/login')
// //    .auth('alwanhafidzin', 'alwan123')
// //    .end((err, res) => {
// //      expect(err).to.be.null;
// //      res.should.have.status(200);
// //      token = res.body.token;
// //      done();
// //    });
// //  });
// //  it("should get all mahasiswa", (done)=> {
// //    chai.request(server)
// //    .get('/api/mahasiswa')
// //    .set('authorization',`Bearer ${token}`)
// //    .end((err, res) => {
// //      expect(err).to.be.null;
// //      res.should.have.status(200);
// //      done();
// //    });
// //  })
// // //  it("should insert new mahasiswa", (done)=> {
// // //    chai.request(server)
// // //    .post('/api/mahasiswa/insert')
// // //    .set('authorization',`Bearer ${token}`)
// // //    .send({ nim:'183140914111049',nama:'Mahasiswa Sistem Informasi',password:'mahasiswa123',jurusan:'5eaeaf8cc26fa30460d66a5a',matkul:'5eb2bb9651a27018c85c1f9e',absensi:'5eae97861e66ba212082710c' })
// // //    .end((err, res) => {
// // //      expect(err).to.be.null;
// // //      res.should.have.status(200);
// // //      console.log(res.body.data)
// // //      done();
// // //    });
// // //  })
// // //  it("should update mahasiswa", (done)=> {
// // //     chai.request(server)
// // //     .put('/api/mahasiswa/update/5eb38fcf80037220c88b5070')
// // //     .set('authorization',`Bearer ${token}`)
// // //     .send({ nama:'Mahasiswa Sistem Informasi Baru' })
// // //     .end((err, res) => {
// // //       expect(err).to.be.null;
// // //       res.should.have.status(200);
// // //       console.log(res.body.data)
// // //       done();
// // //     });
// // //   })
// // // it("should delete mahasiswa", (done)=> {
// // //     chai.request(server)
// // //     .delete('/api/mahasiswa/delete/5eb2bdc2a104e61288d005bb')
// // //     .set('authorization',`Bearer ${token}`)
// // //     .end((err, res) => {
// // //       expect(err).to.be.null;
// // //       res.should.have.status(200);
// // //       console.log(res.body.data)
// // //       done();
// // //     });
// // //   })
// // // })

// // })
// //Untuk tes passport.js harus pada bagian AdminCtrl harus di beri //
// describe("Login Mahasiswa", ()=> {
//   it("Menunjukkan data Absensi Mahasiswa", (done) => {
//     chai.request(server)
//     .get('/auth/mahasiswa/login')
//     .auth('183140914111048', 'mahasiswa123')
//     .end((err, res) => {
//       expect(err).to.be.null;
//       res.should.have.status(200);
//       done();
//     });
//   });
// })