import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getAllProduct: (state, action) => {
            state.products = action.payload
        },
    },
})

export const { getAllProduct } = productSlice.actions

export default productSlice.reducer
