const assert =require('assert');
const User = require('../src/user');

describe('updating records', ()=>{
  let joe;

  beforeEach((done)=>{
    joe = new User({name: 'joe', postCount:0});
    joe.save()
    .then(()=>done());
  });

  function assertName(operation, done){
    operation
      .then(()=> User.find({}))
      .then((users)=>{
        assert(users.length === 1);
        assert(users[0].name==='Alex');
        done();
      });
  }

  it('instance set n save', (done)=>{
    joe.set('name','Alex');
    assertName(joe.save(),done);

  });

  it('instance can update',(done)=>{
    assertName(joe.update({name: 'Alex'}),done);
  });

  it('class can update',(done)=>{
    assertName(
      User.update({name: 'joe'}, {name: 'Alex'}),
      done
    );
  });

  it('class can update one record', (done)=>{
    assertName(
      User.findOneAndUpdate({name: 'joe'}, {name: 'Alex'}),
      done
    );
  });

  it('class can find a record with an Id and can update', (done)=>{
    assertName(
      User.findByIdAndUpdate(joe._id,{name:'Alex'}),
      done
    );
  });

  if('A user can have their postcount incremented by 1', (done)=>{
    User.update({name:'joe'},{$inc:{postCount: 1}})
    .then(()=> User.findOne({name:'joe'}))
    .then((user)=>{
      assert(user.postCount ===1);
      done();
    });
  });
});
