import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { toast } from 'react-toastify'
import axios from 'axios'
import {
    CREATE_POST_REQUEST,
    CREATE_POST_FAIL,
    CREATE_POST_SUCCESS,
    GET_POST_REQUEST,
    GET_POST_FAIL,
    GET_POST_SUCCESS,
    UPDATE_POST_FAIL,
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    GET_POST_BY_ID_FAIL,
    GET_POST_BY_ID_REQUEST,
    GET_POST_BY_ID_SUCCESS
} from '../constants/post'
import { RootState } from '../store';
import { PostUpdate } from '../action-types/post';


axios.defaults.withCredentials = true;

const API_URL=process.env.REACT_APP_API_URL

export const createPostAction =
    (description: string, image: string ,postedBy:string): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: CREATE_POST_REQUEST})
        try {
            const {data}=await axios.post(API_URL + '/posts/create', { description, image ,postedBy })
            dispatch({ type: CREATE_POST_SUCCESS,payload:data })
            toast.success("Post Created")

        } catch (error:any) {
            dispatch({ type: CREATE_POST_FAIL,payload:error.message })
            toast.error("Post Creation Failed")
        }
    }


    export const getPostAction =
    (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: GET_POST_REQUEST})
        try {
            const {data}=await axios.get(API_URL + '/posts')
            dispatch({ type: GET_POST_SUCCESS,payload:data })

        } catch (error:any) {
            dispatch({ type: GET_POST_FAIL,payload:error.message })
        }
    }  


    export const getPostByIdAction =
    (id:string): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: GET_POST_BY_ID_REQUEST})
        try {
            const {data}=await axios.get(API_URL + '/posts/'+id)
            dispatch({ type: GET_POST_BY_ID_SUCCESS,payload:data })

        } catch (error:any) {
            dispatch({ type: GET_POST_BY_ID_FAIL,payload:error.message })
        }
    }  
    
    

    export const updatePostAction =
    (id:string,updateData:PostUpdate): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch) => {
        dispatch({ type: UPDATE_POST_REQUEST})
        try {
            const {data}=await axios.put(API_URL + '/posts/'+id,updateData)
            dispatch({ type: UPDATE_POST_SUCCESS,payload:data })

        } catch (error:any) {
            dispatch({ type: UPDATE_POST_FAIL,payload:error.message })
            toast.error(`Operation failed due to ${error.message} error`)
        }
    }  