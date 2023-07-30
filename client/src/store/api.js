/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000/api/v1/',
    }),
    tagTypes: ['Brand', 'Customer', 'Total_Customer', 'All_Product', 'CATEGORY'],
    endpoints: (build) => ({
        getBrands: build.query({
            query: () => 'brand/getBrands',
            providesTags: ['Brand'],
        }),
        getCustomers: build.query({
            query: ({ page, pageSize, search }) => ({
                url: 'customer/all',
                method: 'GET',
                params: { page, pageSize, search },
            }),
            providesTags: ['Customer'],
        }),
        getProducts: build.query({
            query: () => 'product/all',
            providesTags: ['All_Product'],
        }),
        getCategory: build.query({
            query: () => 'category/',
            providesTags: ['CATEGORY'],
        }),
    }),
})

export const { useGetBrandsQuery, useGetCustomersQuery, useGetProductsQuery, useGetCategoryQuery } = api
export default api
