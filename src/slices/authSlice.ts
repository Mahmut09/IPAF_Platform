import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface isAuthState {
    value: boolean;
}

const initialState: isAuthState = {
    value: false,
};

const isAuthSlice = createSlice({
    name: "isAuth",
    initialState,
    reducers: {
        setIsAuthenticated(state, action: PayloadAction<boolean>) {
            state.value = action.payload;
        },
    },
});

export const { setIsAuthenticated } = isAuthSlice.actions;

export default isAuthSlice.reducer;