import CurrentUser from "../current-user";

describe("add a new user", () => {
  const initialUsersState = {
    currentUser:''
  };

  it("should return the initial state", () => {
    expect(CurrentUser(undefined, {})).toEqual({ currentUser:'' });
  });

  it("should return the current user object", () => {
    expect(CurrentUser(initialUsersState, {
        type:'CURRENT_USER',
        payload:{ name: "abd", email: "abd@mail.com" }
    })).toEqual({ currentUser: { name: "abd", email: "abd@mail.com" } });
  });
});