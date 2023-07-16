/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000/api/v1/',
    }),
    tagTypes: ['Brand', 'Customer', 'Total_Customer', 'All_Product'],
    endpoints: (build) => ({
        getBrands: build.query({
            query: () => 'brand/getBrands',
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
        getAllProduct: build.query({
            query: () => 'product/all',
            providesTags: ['All_Product'],
        }),
    }),
})

export const { useGetBrandsQuery, useGetCustomerQuery, useGetLengthOfCustomerQuery, useGetAllProductQuery } = api
export default api
