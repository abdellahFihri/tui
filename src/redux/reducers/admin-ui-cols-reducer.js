const INITIAL_STATE={
    columns: [
        { title: "User ID", field: "userid", type: "numeric" },
        { title: "Full Name", field: "fullname" },
        { title: "User Name", field: "username" },
        { title: "Email", field: "email" },
        { title: "Gender", field: "gender" },
        { title: "Password", field: "password" }
      ]
};


const adminUiCols=(state=INITIAL_STATE,action)=>{

  switch(action.type){
    default:
      return state;
  }
}
export default adminUiCols;