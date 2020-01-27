import addUser from "../addUserReducer";

describe("add a new user", () => {
  const initialUsersState = {
    users: []
  };

  it("should return the initial state", () => {
    expect(addUser(undefined, {})).toEqual({ users: [] });
  });

  it("should handle adding a new user to the array", () => {
    expect(addUser(initialUsersState, {
        type:'ADD_USER',
        payload:[{ name: "abd", email: "abd@mail.com" }]
    })).toEqual({ users: [{ name: "abd", email: "abd@mail.com" }] });
  });
});
