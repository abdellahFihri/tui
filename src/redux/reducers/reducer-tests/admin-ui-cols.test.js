import adminUiCols from "../admin-ui-cols-reducer";

describe("ui table columns", () => {
  const initialUsersState = {
    columns:[{title:'title',field:'filed',type:'type'}]
  };

  it("should return columns array ", () => {
    expect(adminUiCols(initialUsersState, {
      type:'',
      payload:''
    })).toEqual({columns:[{title:'title',field:'filed',type:'type'}] });
  });
});