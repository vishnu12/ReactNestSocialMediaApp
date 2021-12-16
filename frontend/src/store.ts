import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {TypedUseSelectorHook,useSelector as useStoreSelector} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer, 
        userRegisterReducer,
        getUserReducer, 
        updateUserReducer,
        getLoggedInUserReducer,
        getFriendsReducer,
      } from './reducers/user'
import { createPostReducer,getPostReducer,updatePostReducer,getPostByIdReducer } from './reducers/post'



const rootReducer=combineReducers({
   userLogin:userLoginReducer,
   getLoggedInUser:getLoggedInUserReducer,
   userRegister:userRegisterReducer,
   getUser:getUserReducer,
   updateUser:updateUserReducer,
   createPost:createPostReducer,
   getPosts:getPostReducer,
   updatePost:updatePostReducer,
   getPostById:getPostByIdReducer,
   getFriends:getFriendsReducer,
})

export type RootState=ReturnType<typeof rootReducer>

// const userFromStorage=localStorage.getItem('user')?JSON.parse(`${localStorage.getItem('user')}`):null
// const initialState:Omit<RootState,'userRegister'>={
//     userLogin:{
//         user:userFromStorage,
//     }
// }

const middleware=[thunk]

const store=createStore(rootReducer,composeWithDevTools(
    applyMiddleware(...middleware)
))

export const useSelector:TypedUseSelectorHook<RootState>=useStoreSelector

export default store