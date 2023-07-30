import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    customers: [],
    customersLenght: 0,
}

export const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        getAllCustomer: (state, action) => {
            state.customers = action.payload
        },
        createCustomer: (state, action) => {
            state.customers = [...state.customers, action.payload]
        },
        deleteCustomer: (state, action) => {
            state.customers = state.customers.filter((item) => item._id !== action.payload)
        },
        setCustomersLenght: (state, action) => {
            state.customersLenght = action.payload
        },
    },
})

export const { getAllCustomer, createCustomer, deleteCustomer, setCustomersLenght } = customerSlice.actions
export default customerSlice.reducer
