import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './components/slice/cartSlice'

export default configureStore({
    reducer: {
        cartItemSlice: cartSlice.reducer
    }
})