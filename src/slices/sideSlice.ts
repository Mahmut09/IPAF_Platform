import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface sidebarIsActive {
    value: boolean;
}

const initialState: sidebarIsActive = {
    value: true,
};

const sidebarIsActiveSlice = createSlice({
    name: "sidebarIsActive",
    initialState,
    reducers: {
        setSidebarIsActive(state, action: PayloadAction<boolean>) {
            state.value = action.payload;
        },
    },
});

export const { setSidebarIsActive } = sidebarIsActiveSlice.actions;

export default sidebarIsActiveSlice.reducer;