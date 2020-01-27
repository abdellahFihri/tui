
const INITIAL_STATE={
    users:[]
}
const addUser=(state=INITIAL_STATE,action)=>{
   
   
switch(action.type){
  case 'ADD_USER':
      return {...state,
        users:action.payload};
     
      default:
          return state
    
}  
}
export default addUser