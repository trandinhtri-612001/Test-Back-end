import { createContext, useReducer, useEffect,useState } from "react";
import axios from 'axios'
import { authReducer } from "../reducer/autReducer";
import{apiUrl, LOCAL_STOGARE_TOKEN_NAME} from './contents'
import setaxiostoken from "../axiostken/axiostoken";


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {
		authLoading: false,
		isAuthenticated: false,
        alluser:[],
		user: null
	})
console.log(authState.isAuthenticated)
    //get list user
 const getalluser = async()=>{
    try {
        const res= await axios.get(`${apiUrl}/auth/find`);
        
     
        if (res.data.success) {
          
           dispatch({
                type: 'GET-ALL-USER',
                payload:res.data.users
            })
             
        }
    } catch (error) {
        localStorage.removeItem(LOCAL_STOGARE_TOKEN_NAME)
        dispatch({
            type: 'log_out',
            payload:null
 
        })
        

        
    }
 }
    
// set auth
//get detail user
    const loadUser = async() => {
        if (localStorage[LOCAL_STOGARE_TOKEN_NAME]) {
           
            setaxiostoken(localStorage[LOCAL_STOGARE_TOKEN_NAME])
        }
        try { 
            const responseuser = await axios.get(`${apiUrl}/auth`);
           
          
            if (responseuser.data.success) {
               dispatch({
					type: 'SET_AUTH',
					payload:responseuser.data.user
				})
                
            }
        } catch (error) {
          console.log(error)
            dispatch({
                type: 'log_out',
                payload:null
     
            })
            

            
        }
    }
useEffect(() => loadUser(), [])
    
    //login
    const loginUser = async (userForm) => {
        try {

            const response = await axios.post(`${apiUrl}/auth/login`, userForm)
            console.log(response.data.accsessToken)

            if (response.data.success) {
             
                localStorage.setItem(LOCAL_STOGARE_TOKEN_NAME,response.data.accsessToken);
                await loadUser();
            
                return response.data
            }
            
          
        } catch (error) {
            
            return error.response.data
            
        }
        
    }
     

    
    // register
    const registerUser = async(registerform) => {
        
        try {
            const resRegisterUser = await axios.post(`${apiUrl}/auth/register`,registerform)
            if (resRegisterUser.data.success) {
                return resRegisterUser.data
            }
           

        } catch (error) {

               return error.response.data
            
        }

    }
    // update user
    const updateuser = async(formupdate,_id) => {
        
        try {
            const response = await axios.put(`${apiUrl}/auth/${_id}`, formupdate)
            console.log(response.data. resrUpdate.username)
            if (response.data.success) {
                dispatch({
                    type: 'UPDATE',
                    payload:response.data. resrUpdate
         
                })
                
            }
              return response.data
    
        } catch (error) {
            return error.response.data
        }
    }

    const deleteuser = async(id) => {
        
        try {
            const response = await axios.delete(`${apiUrl}/auth/${id}`)
            console.log(response)
            if (response.data.success) {
                dispatch({
                    type: 'DELETE',
                    payload:response.data.userdelete
         
                })
                
                
            }
              return response.data
    
        } catch (error) {
            return error.response.data
        }
    }
//logout
    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STOGARE_TOKEN_NAME)
            dispatch({
                type: 'LOG_OUT',
                payload:null
     
            })
    }
    // find one
    const findone=(_id)=>{
        const data = authState.alluser.find(el=>{
            if(el._id===_id){
                return el
            }
        })
    }


    const AuthContextData = { loginUser,
        registerUser,authState,
        logoutUser,updateuser,
        getalluser,deleteuser,findone }
    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;