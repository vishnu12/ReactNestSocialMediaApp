import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_LOGOUT,
} from '../constants/user'
import { RootState } from '../store'
import { UserLoginState } from '../action-types/user'


axios.defaults.withCredentials = true;

const API_URL='http://localhost:5000'

export const loginAction =
    (email: string, password: string): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: USER_LOGIN_REQUEST })
        try {
            const {data}=await axios.post(API_URL+'/auth/login', { email, password})
            dispatch({ type: USER_LOGIN_SUCCESS,payload:data })
            localStorage.setItem('user',JSON.stringify(data))
            
        } catch (error) {
            dispatch({ type: USER_LOGIN_FAIL })
        }
    }


export const logout=():ThunkAction<void,RootState,undefined,AnyAction>=>async (dispatch)=>{
     try{
        await axios.get(API_URL+'/auth/logout') 
        dispatch({type:USER_LOGOUT})
        localStorage.removeItem('user')
     }catch(e){

     }
     
}    