const assert = require('assert');
const User = require('../src/user');

describe('to delete a user', ()=>{
  let joe;

  beforeEach((done)=>{
    joe = new User({name: 'joe'});
    joe.save()
    .then(()=>done());
  });

  function assertName(operation, done){
    operation
    .then(()=>User.findOne({name: 'joe'}))
    .then((user)=>{
      assert(user === null);
      done();
    });
  }

  it('model instance remove', (done)=>{
    assertName(joe.remove(), done);
  });

  it('class remove', (done)=>{
    assertName(User.remove({name:'joe'}), done);
  });

  it('class findOneAndRemove', (done)=>{
      assertName(User.findOneAndRemove({name:'joe'}),done);
  });

  it('class findByIdAndRemove', (done)=>{
      assertName(User.findByIdAndRemove({_id: joe._id}),done);
  });
});
