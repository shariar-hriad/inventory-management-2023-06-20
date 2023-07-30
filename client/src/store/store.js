import { configureStore } from '@reduxjs/toolkit'
import storeApi from './api'
import authReducer from './features/auth/authSlice'
import brandReducer from './features/brand/brandSlice'
import categoryReducer from './features/category/categorySlice'
import customerReducer from './features/customer/customerSlice'
import productReducer from './features/product/productSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        brands: brandReducer,
        categories: categoryReducer,
        customers: customerReducer,
        [storeApi.reducerPath]: storeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
})
