var expect  = require('chai').expect,
    app     = require('../../server'),
    request = require('supertest')(app),
    knex    = require('../../db/knex');

describe('API', ()=> {
  before(done => {
    knex.migrate.latest()
      .then( () => {
        knex.seed.run()
          .then( () => {
            done();
          })
      })
  })

  after( done => {
    knex.migrate.rollback()
      .then( () => {
        done();
      })
  })

  describe('/posts :GET', ()=> {
    it('should retrieve list of seeded posts', done => {
      request
        .get('/posts')
        .expect(200)
        .end((err, res) => {
          var data = res.body;

          expect(data.length).to.eq(3);
          done();
        });
    });
  });

  describe('/posts :POST,', () => {
    it('should return new post info after posting', done => {
      var data = {
        post_text:'This is a new post, my dude.'
      }

      request
        .post('/posts')
        .send(data)
        .expect(200)
        .end((err, res) => {
          var data = res.body[0];

          expect(data.post_text).to.eq('This is a new post, my dude.');
          done();
        });
    });

    it('should be posted to the database with index of 3', done => {
      request
        .get('/posts')
        .expect(200)
        .end((err, res) => {
          var data = res.body;

          expect(data.length).to.eq(4);
          expect(data[3].post_text).to.eq('This is a new post, my dude.');
          done();
        });
    });
  });
});
