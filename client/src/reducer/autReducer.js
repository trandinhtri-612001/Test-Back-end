export const authReducer = (state, action) => {
    const { type,
        payload,
    } = action
   
    switch (type) {
        case 'GET-ALL-USER':
            
            return{
                ...state,
                authReducer:false,
                isAuthenticated:true,
               alluser:payload
            }
            
        case 'SET_AUTH':
            return {
                ...state,
		authLoading:false,
		isAuthenticated:true,
		user:payload
            }
            case 'UPDATE':
const newuser=state.alluser.map((el)=>{
    if(el._id  === payload._id){
        return payload
    }else{
        return el
    }
})
console.log(newuser)
            return{
                ...state,
                authReducer:false,
                isAuthenticated:true,
               alluser:newuser
            }
            case 'DELETE':

                return{
                    ...state,
                    authReducer:false,
                    isAuthenticated:true,
                   alluser:state.alluser.filter((el)=>{
                       return el._id !==payload._id
                   })
                }
        
        case 'LOG_OUT':
            return {
                ...state,
                authLoading: false,
                isAuthenticated: false,
                user:payload
            }
        default:
            return state
    }

}