import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import userProfileReducer from './reducers'

const reducer = combineReducers({
    userProfile: userProfileReducer,
})
const store = configureStore({
    reducer,
})
export default store
