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
import { NavigateFunction } from 'react-router'



axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:5000'

export const loginAction =
    (email: string, password: string): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: USER_LOGIN_REQUEST })
        try {
            const {data}=await axios.post(API_URL + '/auth/login', { email, password })
            dispatch({ type: USER_LOGIN_SUCCESS,payload:data })

        } catch (error) {
            dispatch({ type: USER_LOGIN_FAIL })
        }
    }


export const registerAction =
    (name: string, email: string, password: string): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: USER_REGISTER_REQUEST })
        try {
            const { data } = await axios.post(API_URL + '/auth/register', { name, email, password })
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

    }

}