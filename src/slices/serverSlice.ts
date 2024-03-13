import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "http://localhost:9999",
};

const serverSlice = createSlice({
    name: 'server',
    initialState,
    reducers: {
        setServerAddress(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setServerAddress } = serverSlice.actions;
export default serverSlice.reducer;