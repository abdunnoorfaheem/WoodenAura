import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cartItemSlice",
    initialState: {
        cartItems: localStorage.getItem("cart") ?
            JSON.parse(localStorage.getItem("cart")) : [],
    },
    reducers: {
        addToCart: (state, action) => {
            let findProducts = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (findProducts === -1) {
                state.cartItems.push(action.payload);
            } else {
                state.cartItems[findProducts].qty += 1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        increment: (state, action) => {
            state.cartItems[action.payload].qty += 1;
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        decrement: (state, action) => {
            let item = state.cartItems[action.payload];
            if (item.qty > 1) { // Ensure qty never drops below 1
                item.qty -= 1;
                localStorage.setItem("cart", JSON.stringify(state.cartItems));
            }
        },
        deleteProduct: (state, action) => {
            state.cartItems.splice(action.payload, 1);
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        clearCart: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
    }
});

export const { addToCart, increment, decrement, deleteProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;