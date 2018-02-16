const assert = require('assert');
const User = require('../src/user');

describe('to delete a user', ()=>{
  let joe;

  beforeEach((done)=>{
    joe = new User({name: 'joe'});
    joe.save()
    .then(()=>done());
  });

  it('model instance remove', (done)=>{
    joe.remove()
      .then(()=>User.findOne({name: 'joe'}))
      .then((user)=>{
        assert(user === null);
        done();
      });
  });

  it('class remove', (done)=>{
    User.remove({name:'joe'})
    .then(()=>User.findOne({name: 'joe'}))
    .then((user)=>{
      assert(user === null);
      done();
    });
  });

  it('class findOneAndRemove', (done)=>{
      User.findOneAndRemove({name:'joe'})
      .then(()=>User.findOne({name: 'joe'}))
      .then((user)=>{
        assert(user === null);
        done();
      });
  });

  it('class findByIdAndRemove', (done)=>{
      User.findByIdAndRemove({_id: joe._id})
      .then(()=>User.findOne({name: 'joe'}))
      .then((user)=>{
        assert(user === null);
        done();
    });
  });
});
