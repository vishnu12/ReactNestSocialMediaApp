import { AnyAction } from "redux";
import { Post, PostUpdate } from "../action-types/post";
import {
    CREATE_POST_FAIL,
    CREATE_POST_SUCCESS,
    CREATE_POST_REQUEST,
    GET_POST_FAIL,
    GET_POST_SUCCESS,
    GET_POST_REQUEST,
    UPDATE_POST_FAIL,
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS
} from '../constants/post'

interface CreatePostState {
    post:Post
    loading?: boolean;
    success?: boolean;
    error?:boolean
}

interface GetPostState {
    posts:Post[],
    loading?: boolean;
    success?: boolean;
    error?:boolean
}

interface UpdatePostState{
    post:PostUpdate
    loading?: boolean;
    success?: boolean;
    error?:boolean
}

const initialStateCreate: CreatePostState = {
    post:{},
    loading: false,
    success: false,
    error:false
}

const initialStateGet: GetPostState = {
    posts:[],
    loading: false,
    success: false,
    error:false
}


const initialStateUpdate: UpdatePostState = {
    post:{},
    loading: false,
    success: false,
    error:false
}

export const createPostReducer = (state = initialStateCreate, action:AnyAction) => {
  switch (action.type) {
      case CREATE_POST_REQUEST:
          return{
              ...state,
              loading:true
          }
      case CREATE_POST_SUCCESS:
          return{
                ...state,
                loading:false,
                post:action.payload as Post,
                success:true
          }     
          
          
    case CREATE_POST_FAIL:
        return{
            ...state,
            loading:false,
            error:true
        }
      default:
          return state;
  }
}



export const getPostReducer = (state = initialStateGet, action:AnyAction) => {
    switch (action.type) {
        case GET_POST_REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_POST_SUCCESS:
            return{
                  ...state,
                  loading:false,
                  posts:action.payload as Post[]
            }     
            
            
      case GET_POST_FAIL:
          return{
              ...state,
              loading:false,
              error:true
          }
        default:
            return state;
    }
  }



  export const updatePostReducer = (state = initialStateUpdate, action:AnyAction) => {
    switch (action.type) {
        case UPDATE_POST_REQUEST:
            return{
                ...state,
                loading:true
            }
        case UPDATE_POST_SUCCESS:
            return{
                  ...state,
                  loading:false,
                  post:action.payload as PostUpdate
            }     
            
            
      case UPDATE_POST_FAIL:
          return{
              ...state,
              loading:false,
              error:true
          }
        default:
            return state;
    }
  }