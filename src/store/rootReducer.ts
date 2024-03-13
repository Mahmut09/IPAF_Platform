import { combineReducers } from '@reduxjs/toolkit';
import isAuthSlice from '../slices/authSlice'
import sidebarIsActiveSlice from '../slices/sideSlice'
import serverSlice from '../slices/serverSlice';

const rootReducer = combineReducers({
    isAuth: isAuthSlice,
    sidebarIsActive: sidebarIsActiveSlice,
    serverURL: serverSlice,
});

export default rootReducer;