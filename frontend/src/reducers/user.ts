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
    GET_LOGGEDIN_USER_REQUEST,
    GET_FRIENDS_FAIL,
    GET_FRIENDS_REQUEST,
    GET_FRIENDS_SUCCESS
} from '../constants/user'

export interface UserState{
    user:UserData,
    loading?:boolean,
    error?:string,
    success?:boolean
}

export interface UserUpdateState{
  user:UserUpdateData,
  loading?:boolean,
  error?:string,
  success?:boolean
}

export interface FriendsState{
  friends:{_id:string,name:string,profilepic:string}[],
  loading?:boolean,
  error?:string,
  success?:boolean
}

const initialState:UserState={
    user:{},
    loading:false,
    error:'',
    success:false,

}

const initialupdateState:UserUpdateState={
    user:{},
    loading:false,
    error:'',
    success:false,
}

const initialStateFriends:FriendsState={
  friends:[],
  loading:false,
  error:'',
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
            error:''
            
        }
      case USER_LOGIN_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payload
        }

      case USER_LOGOUT:
        return{
            ...state,
            user:null,
            loading:false,
            success:false,
            error:''
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
                error:''
          }
        case USER_REGISTER_FAIL:
          return{
                ...state,
                loading:false,
                error:action.payload
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
          error:''
        }   
     
      case GET_USER_FAIL:
        return{
          ...state,
          error:action.payload
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
       error:''
     }   
  
   case GET_LOGGEDIN_USER_FAIL:
     return{
       ...state,
       error:action.payload
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
            error:''
          } 

          case USER_UPDATE_FAIL:
          return {
            ...state,
            loading:false,
            error:action.payload
          } 
    
      default:
        return state;
    }
 }


  export const getFriendsReducer=(state=initialStateFriends,action:AnyAction)=>{
    switch (action.type) {
      case GET_FRIENDS_REQUEST:
        return {
          ...state,
          loading:true
        }
        case GET_FRIENDS_SUCCESS:
          return {
            ...state,
            loading:false,
            success:true,
            friends:action.payload as {_id:string,name:string,profilepic:string}[],
            error:''
          } 

          case GET_FRIENDS_FAIL:
          return {
            ...state,
            loading:false,
            error:action.payload
          } 
    
      default:
        return state;
    }
  } 