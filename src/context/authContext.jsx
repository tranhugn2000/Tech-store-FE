import { createContext, useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrl, LOCAL_STORAGE_TOKEN} from '../constants/constants'
import authReducer from '../reducers/authReducer' 
import setAuthToken from '../utils/setAuthToken'

export const AuthContext = createContext()
const AuthContextProvider = ({children}) =>{
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    const LoginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm)
            if (response.data.status === 0)
            dispatch({
                type: 'SET_AUTH', 
                payload: { isAuthenticated: false, user: response.data.data.auth }
            })
            localStorage.setItem( LOCAL_STORAGE_TOKEN, response.data.data.token)
            localStorage.setItem( "auth", response.data.data.auth)
            setAuthToken(response.data.data.token)
            return response.data
        } catch (error) {
            if (error.response.data)
                return error.response.data
            else 
                return {success:false, message: error.message}
        }
    }

    const authContextData = { LoginUser , authState }
    return (
    <AuthContext.Provider value={authContextData}>
        {children}
    </AuthContext.Provider>
    )
}
 export default AuthContextProvider