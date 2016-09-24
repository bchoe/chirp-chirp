let chirpFunc = function(num){
  if(num === 1){
    return 'chirp';
  }

  console.log(3);

  return chirpFunc(--num) + ' chirp';

};
chirpFunc(3);

module.exports = chirpFunc;