import AdminAccess from "../admin-reducer";

describe("gets the admin user", () => {
  const initialUsersState = {
    admin:null
  };

  it("should return the initial state 'null' ", () => {
    expect(AdminAccess(undefined, {})).toEqual({ admin:null });
  });

  it("should handle switching admin to true ", () => {
    expect(AdminAccess(initialUsersState, {
        type:'ADMINISTRATOR',
        payload:true
    })).toEqual({ admin:true });
  });
});