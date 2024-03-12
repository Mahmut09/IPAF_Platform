import { combineReducers } from '@reduxjs/toolkit';
import isAuthSlice from '../slices/authSlice'
import sidebarIsActiveSlice from '../slices/sideSlice'

const rootReducer = combineReducers({
    isAuth: isAuthSlice,
    sidebarIsActive: sidebarIsActiveSlice,
});

export default rootReducer;