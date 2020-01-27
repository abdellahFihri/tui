import usersColumns from "../users-cols-reducer";

describe("columns titles", () => {
  const initialUsersState = {
    columns:[{id:'1',label:'label',minWidth:'minWidth',align:'align'}]
  };

  it("should return users columns array ", () => {
    expect(usersColumns(initialUsersState, {
      type:'',
      payload:''
    })).toEqual({columns:[{id:'1',label:'label',minWidth:'minWidth',align:'align'}] });
  });
});