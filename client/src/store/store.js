import { configureStore } from '@reduxjs/toolkit'
import storeApi from './api/api'
import brandReducer from './features/brand/brandSlice'
import customerReducer from './features/customer/customerSlice'

export const store = configureStore({
    reducer: {
        customer: customerReducer,
        brand: brandReducer,
        [storeApi.reducerPath]: storeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
})
