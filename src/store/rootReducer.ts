import { combineReducers } from '@reduxjs/toolkit';
import isAuthSlice from '../slices/authSlice'

const rootReducer = combineReducers({
    isAuth: isAuthSlice,
});

export default rootReducer;
