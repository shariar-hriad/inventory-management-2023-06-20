import { createSlice } from '@reduxjs/toolkit'

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user,
    },
})

export default authSlice.reducer
