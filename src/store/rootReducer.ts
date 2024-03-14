import { combineReducers } from '@reduxjs/toolkit';
import isAuthSlice from '../slices/authSlice'
import sidebarIsActiveSlice from '../slices/sideSlice'
import serverSlice from '../slices/serverSlice';
import accessTokenSlice from '../slices/accessTokenSlice';

const rootReducer = combineReducers({
    isAuth: isAuthSlice,
    sidebarIsActive: sidebarIsActiveSlice,
    serverURL: serverSlice,
    accessToken: accessTokenSlice,
});

export default rootReducer;