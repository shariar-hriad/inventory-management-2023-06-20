import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    brands: [],
    brandsLenght: 0,
}

const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        setBrandsLength: (state, action) => {
            state.brandsLenght = action.payload
        },
        getBrands: (state, action) => {
            state.brands = action.payload
        },
        createBrand: (state, action) => {
            state.brands = [...state.brands, action.payload]
        },
        deleteBrand: (state, action) => {
            state.brands = state.brands.filter((item) => item._id !== action.payload)
        },
    },
})

export const { setBrandsLength, getBrands, createBrand, deleteBrand } = brandSlice.actions
export default brandSlice.reducer
