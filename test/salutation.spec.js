const chai = require('chai');
const expect = chai.expect;
const chirpFunc = require ('../index.js');
console.log(chirpFunc);
describe ('chirpChirp', () => {

  it('should return chirp', () =>{
    expect(chirpFunc(2)).to.equal('chirp chirp');
  });


});


