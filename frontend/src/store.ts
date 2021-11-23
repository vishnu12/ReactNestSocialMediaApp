import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {TypedUseSelectorHook,useSelector as useStoreSelector} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, UserState } from './reducers/user'
import { UserLoginState } from './action-types/user'



const rootReducer=combineReducers({
   userLogin:userLoginReducer,
   userRegister:userRegisterReducer,
})

export type RootState=ReturnType<typeof rootReducer>


// const initialState:Omit<RootState,'userRegister'>={
//     userLogin:{
//         user:{id:userIdFromCookie}
//     }
// }

const middleware=[thunk]

const store=createStore(rootReducer,composeWithDevTools(
    applyMiddleware(...middleware)
))

export const useSelector:TypedUseSelectorHook<RootState>=useStoreSelector

export default store