import {AnyAction} from 'redux'
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_REQUEST,
    USER_LOGOUT
} from '../constants/user'

export interface UserState{
    user:any,
    loading?:boolean,
    error?:boolean,
    success?:boolean
}

const initialState:UserState={
    user:{},
    loading:false,
    error:false,
    success:false,

}

export const userLoginReducer=(state=initialState,action:AnyAction)=>{
   switch(action.type){
     
      case USER_LOGIN_REQUEST:
        return{
            ...state,
            loading:true
        }
      case USER_LOGIN_SUCCESS:
        return{
            ...state,
            loading:false,
            success:true,
            error:false
      
        }
      case USER_LOGIN_FAIL:
        return{
            ...state,
            loading:false,
            error:true
        }

      case USER_LOGOUT:
        return{
            ...state,
            user:null,
            loading:false,
            success:false,
            error:false
        }
      default:
        return state
   }
}
   
export const userRegisterReducer=(state=initialState,action:AnyAction)=>{
    switch(action.type){
      
        case USER_REGISTER_REQUEST:
          return{
                ...state,
                loading:true
          }
        case USER_REGISTER_SUCCESS:
          return{
                ...state,
                loading:false,
                user:action.payload
          }
        case USER_REGISTER_FAIL:
          return{
                ...state,
                loading:false,
                error:true
          }
        default:
          return state
    }
    }