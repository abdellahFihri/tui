

const INITIAL_STATE={
    admin:null
}
const AdminAccess=(state=INITIAL_STATE,action)=>{
   
   switch(action.type){
       case 'ADMINISTRATOR':
           return{...state,
        admin:action.payload}
        default:
            return state
       
   }

    

}
export default AdminAccess