const INITIAL_STATE = {
  usersColumns: [
    { id: "fullname",
      label: "Full Name",
      minWidth: 170,
      align: "center" },

    {
      id: "username",
      label: "User Name",
      minWidth: 170,
      align: "center"
    },
    {
      id: "email",
      label: "Email",
      minWidth: 170,
      align: "center"
    },
    {
      id: "gender",
      label: "Gender",
      minWidth: 170,
      align: "center"
    }
  ]
};

const usersCols = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default usersCols;
