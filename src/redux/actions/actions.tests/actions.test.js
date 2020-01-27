import * as actions from '../index';

describe("add a new user", () => {
    
  it('should create an action to bring a user obj',()=>{
const user={name:'abd',email:'abd@mail.com'}
const expectedAction={
    type:'ADD_USER',
    payload:user
}
expect(actions.userToAdd(user)).toEqual(expectedAction)
  })


  it('should get the administrator boolean',()=>{
    const currentUserAdmin=undefined
    const expectedAction={
        type:'ADMINISTRATOR',
        payload:currentUserAdmin
    }
    expect(actions.GetAdmin(currentUserAdmin)).toEqual(expectedAction)
      })

      it('should get true if its true',()=>{
        const currentUserAdmin=true;
        const expectedAction={
            type:'ADMINISTRATOR',
            payload:currentUserAdmin
        }
        expect(actions.GetAdmin(currentUserAdmin)).toEqual(expectedAction)
      })

      it('should get user obj if a user is logged in',()=>{
        const currentUser={name:'abd',email:'abd@mail.com'};
        const expectedAction={
            type:'CURRENT_USER',
            payload:currentUser
        }
        expect(actions.IsUser(currentUser)).toEqual(expectedAction)
      })

      

  
  });