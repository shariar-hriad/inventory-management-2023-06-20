import { configureStore } from '@reduxjs/toolkit'
import storeApi from './api'
import authReducer from './features/auth/authSlice'
import brandReducer from './features/brand/brandSlice'
import customerReducer from './features/customer/customerSlice'
import productReducer from './features/product/productSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        customer: customerReducer,
        brand: brandReducer,
        [storeApi.reducerPath]: storeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
})
