import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    customer: [],
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        getAllCustomer: (state, action) => {
            state.customer = action.payload
        },
        createCustomer: (state, action) => {
            state.customer = [...state.customer, action.payload]
        },
        deleteCustomer: (state, action) => {
            state.customer = state.customer.filter((item) => item._id !== action.payload)
        },
    },
})

export const { getAllCustomer, createCustomer, deleteCustomer } = customerSlice.actions
export default customerSlice.reducer
