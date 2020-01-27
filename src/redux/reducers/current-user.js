const INITIAL_STATE = {
  currentUser: ""
};
const CurrentUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
export default CurrentUser;
