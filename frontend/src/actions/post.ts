import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import {
    CREATE_POST_REQUEST,
    CREATE_POST_FAIL,
    CREATE_POST_SUCCESS,
    GET_POST_REQUEST,
    GET_POST_FAIL,
    GET_POST_SUCCESS
} from '../constants/post'
import { RootState } from '../store';


axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:5000'

export const createPostAction =
    (description: string, image: string ,postedBy:string): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: CREATE_POST_REQUEST})
        try {
            const {data}=await axios.post(API_URL + '/posts/create', { description, image ,postedBy })
            dispatch({ type: CREATE_POST_SUCCESS,payload:data })

        } catch (error) {
            dispatch({ type: CREATE_POST_FAIL })
        }
    }


    export const getPostAction =
    (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: GET_POST_REQUEST})
        try {
            const {data}=await axios.get(API_URL + '/posts')
            dispatch({ type: GET_POST_SUCCESS,payload:data })

        } catch (error) {
            dispatch({ type: GET_POST_FAIL })
        }
    }    