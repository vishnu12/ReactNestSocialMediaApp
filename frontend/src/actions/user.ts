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
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    GET_USER_REQUEST,
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    GET_LOGGEDIN_USER_FAIL,
    GET_LOGGEDIN_USER_REQUEST,
    GET_LOGGEDIN_USER_SUCCESS
} from '../constants/user'
import { RootState } from '../store'
import { NavigateFunction } from 'react-router'
import { UserData, UserUpdateData } from '../action-types/user'




axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:5000'

export const loginAction =
    (email: string, password: string): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: USER_LOGIN_REQUEST })
        try {
            const {data}=await axios.post(API_URL + '/auth/login', { email, password })
            dispatch({ type: USER_LOGIN_SUCCESS})

        } catch (error) {
            dispatch({ type: USER_LOGIN_FAIL })
        }
    }


export const registerAction =
    (name: string, email: string, password: string,phone:string,location:string): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: USER_REGISTER_REQUEST })
        try {
            const { data } = await axios.post(API_URL + '/auth/register', { name, email, password ,phone,location})
            dispatch({ type: USER_REGISTER_SUCCESS, payload: data })

        } catch (error) {
            dispatch({ type: USER_REGISTER_FAIL })
        }
    }

export const logout = (cb:NavigateFunction): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
    try {
        await axios.get(API_URL + '/auth/logout')
        dispatch({ type: USER_LOGOUT })
        localStorage.removeItem('user')
        cb('/login')
    } catch (e) {
      console.log(e)
    }

}


export const getUserAction =
    (id:string): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: GET_USER_REQUEST })
        try {
            const { data } = await axios.get(API_URL + '/user/'+id)
            dispatch({ type: GET_USER_SUCCESS, payload: data })

        } catch (error) {
            dispatch({ type: GET_USER_FAIL })
        }
    }


    export const getLoggedInUserAction =
    (id:string): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: GET_LOGGEDIN_USER_REQUEST })
        try {
            const { data } = await axios.get(API_URL + '/user/'+id)
            dispatch({ type: GET_LOGGEDIN_USER_SUCCESS, payload: data })

        } catch (error) {
            dispatch({ type: GET_LOGGEDIN_USER_FAIL })
        }
    }    

export const updateUserAction =
(id:string|undefined,updateData:UserUpdateData): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
    dispatch({ type: USER_UPDATE_REQUEST })
    try {
        const { data } = await axios.put(API_URL + '/user/'+id,updateData)
        dispatch({ type: USER_UPDATE_SUCCESS, payload: data })
        
    } catch (error) {
        dispatch({ type: USER_UPDATE_FAIL })
    }
}    