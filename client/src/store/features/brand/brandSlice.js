import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    brand: [],
}

const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        getBrand: (state, action) => {
            state.brand = action.payload
        },
        createBrand: (state, action) => {
            state.brand = [...state.brand, action.payload]
        },
        deleteBrand: (state, action) => {
            state.brand = state.brand.filter((item) => item._id !== action.payload)
        },
    },
})

export const { getBrand, createBrand, deleteBrand } = brandSlice.actions
export default brandSlice.reducer
