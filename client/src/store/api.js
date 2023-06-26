/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000/api/v1/',
    }),
    tagTypes: ['Brand', 'Customer', 'Total_Customer'],
    endpoints: (build) => ({
        getBrand: build.query({
            query: () => 'brand/getBrand',
            providesTags: ['Brand'],
        }),
        getCustomer: build.query({
            query: () => 'customer/allCustomer',
            providesTags: ['Customer'],
        }),
        getLengthOfCustomer: build.query({
            query: () => 'customer/total',
            providesTags: ['Total_Customer'],
        }),
    }),
})

export const { useGetBrandQuery, useGetCustomerQuery, useGetLengthOfCustomerQuery } = api
export default api
