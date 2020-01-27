

export const userToAdd=(user)=>{

    return{
        type:'ADD_USER',
        payload:user
    }
}

export const GetAdmin=(currentUserAdmin)=>{
    return{
        type:'ADMINISTRATOR',
        payload:currentUserAdmin
    }
}
export const IsUser=(currentUser)=>{
    return{
        type:'CURRENT_USER',
        payload:currentUser
    }
}