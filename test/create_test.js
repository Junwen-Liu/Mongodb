const assert = require('assert');
const User =  require('../src/user');
console.log(User);
describe('creating records', ()=>{
  it('save a user', (done)=>{
    const joe = new User({name: "joe"});

    joe.save()
      .then(()=>{
        assert(!joe.isNew);
      });
    done();
  });
});
