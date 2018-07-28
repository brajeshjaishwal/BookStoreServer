let chai = require('chai')
let ChaiHttp =require('chai-http')
let Book = require('./model')

let app = require('./index')
let should = chai.should()
chai.use(ChaiHttp)

describe('Books', () => {
    beforeEach((done) => {
        Book.remove().then((err) => {
            done()
        })
    })
})

describe('Books-list', () => {
    it('should return array of length 2', (done) => {
        chai.request(app)
        .get('/Books')
        .end((err, res) => {
            res.body.should.be.a('array')
            res.should.have.status(200)
            res.body.length.should.be.eql(2);

            done();
        })
    })
})
