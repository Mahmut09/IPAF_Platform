import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface accessToken {
    value: string;
}

const initialState: accessToken = {
    value: localStorage.getItem("accessToken") || "",
}

const accessTokenSlice = createSlice({
    name: "accessToken",
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<string>) {
            state.value = action.payload;
        }
    },
});

export const { setAccessToken } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;