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
    },
})

export const { getAllCustomer } = customerSlice.actions
export default customerSlice.reducer
