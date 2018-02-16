const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', ()=>{

  let joe;

//generate the user before the test
  beforeEach((done)=>{
    joe = new User({name:'joe'});
    joe.save()
    .then(()=>done());
  });

  it('find all users with name of joe', (done)=>{
    //joe will eb instance of users
    User.find({name: 'joe'})
    .then((users)=>{
      assert(users[0]._id.toString() === joe._id.toString());
      done();
    });
  });

  it('find a user with specific id', (done)=>{
    User.findOne({_id: joe._id})
    .then((user)=>{
      assert(user.name === 'joe');
      done();
    });
  });
});
