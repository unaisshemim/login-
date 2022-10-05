import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../store/userRedux'
export const store=configureStore({
    reducer:userReducer
})