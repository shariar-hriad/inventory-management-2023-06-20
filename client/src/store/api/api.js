import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/v1/',
    }),
    tagTypes: ['Brand', 'Customer'],
    endpoints: (build) => ({
        getBrand: build.query({
            query: () => 'brand/getBrand',
            providesTags: ['Brand'],
        }),
        getCustomer: build.query({
            query: () => 'customer/allCustomer',
            providesTags: ['Customer'],
        }),
    }),
})

export const { useGetBrandQuery, useGetCustomerQuery } = api
export default api
