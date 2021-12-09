import {AnyAction} from 'redux'
import { UserData, UserUpdateData } from '../action-types/user'
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_REQUEST,
    USER_REGISTER_RESET,
    USER_LOGOUT,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    GET_USER_REQUEST,
    USER_UPDATE_FAIL,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_REQUEST,
    GET_LOGGEDIN_USER_FAIL,
    GET_LOGGEDIN_USER_SUCCESS,
    GET_LOGGEDIN_USER_REQUEST
} from '../constants/user'

export interface UserState{
    user:UserData,
    loading?:boolean,
    error?:boolean,
    success?:boolean
}

export interface UserUpdateState{
  user:UserUpdateData,
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

const initialupdateState:UserUpdateState={
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
                user:action.payload as UserData,
                success:true,
          }
        case USER_REGISTER_FAIL:
          return{
                ...state,
                loading:false,
                error:true
          }

        case USER_REGISTER_RESET:
          return{
            ...state,
            success:false,
          }
        default:
          return state
    }
    }


 export const getUserReducer=(state=initialState,action:AnyAction)=>{
     switch (action.type) {
       case GET_USER_REQUEST:
            return{
              ...state,
              loading:true
            }
      case GET_USER_SUCCESS:
        return{
          ...state,
          loading:false,
          success:true,
          user:action.payload as UserData,
        }   
     
      case GET_USER_FAIL:
        return{
          ...state,
          error:true
        }
       default:
         return state;
     }
 }

 export const getLoggedInUserReducer=(state=initialState,action:AnyAction)=>{
  switch (action.type) {
    case GET_LOGGEDIN_USER_REQUEST:
         return{
           ...state,
           loading:true
         }
   case GET_LOGGEDIN_USER_SUCCESS:
     return{
       ...state,
       loading:false,
       success:true,
       user:action.payload as UserData,
     }   
  
   case GET_LOGGEDIN_USER_FAIL:
     return{
       ...state,
       error:true
     }
    default:
      return state;
  }
}




 export const updateUserReducer=(state=initialupdateState,action:AnyAction)=>{
    switch (action.type) {
      case USER_UPDATE_REQUEST:
        return {
          ...state,
          loading:true
        }
        case USER_UPDATE_SUCCESS:
          return {
            ...state,
            loading:false,
            success:true,
            user:action.payload as UserUpdateData,
          } 

          case USER_UPDATE_FAIL:
          return {
            ...state,
            loading:false,
            error:true
          } 
    
      default:
        return state;
    }
 }