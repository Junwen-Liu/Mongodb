const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', ()=>{

  let joe;

  beforeEach((done)=>{
    joe = new User({name:'joe'});
    joe.save()
    .then(()=>done());
  });

  it('find all users with name of joe', ()=>{
    //joe will eb instance of users
  });
});
