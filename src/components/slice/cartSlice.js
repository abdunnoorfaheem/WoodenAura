import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cartItemSlice",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {

            console.log(action);

        },
    },
});

// Action creators are generated for each case reducer function
export const { increment } = cartSlice.actions;

export default cartSlice.reducer;