import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    productsLenght: 0,
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProduct: (state, action) => {
            state.products = action.payload
        },
        setProductsLenght: (state, action) => {
            state.productsLenght = action.payload
        },
    },
})

export const { getAllProduct, setProductsLenght } = productSlice.actions

export default productSlice.reducer
