import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { useGetCustomersQuery } from '../../store/api'

const CustomerTable = () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [search, setSearch] = useState('')

    // get customers from redux-rtk-query
    const { data: customerQuery, isCustomerLoading } = useGetCustomersQuery({
        page,
        pageSize,
        search,
    })

    console.log(customerQuery)

    const columns = [
        {
            field: '_id',
            headerName: 'ID',
            flex: 1,
        },
        {
            field: 'name',
            headerName: 'নাম',
            flex: 0.5,
        },
        {
            field: 'phoneNumber',
            headerName: 'ফোন নাম্বার',
            flex: 0.5,
            renderCell: (params) => {
                return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, '($1)$2-$3')
            },
        },
        {
            field: 'address',
            headerName: 'ঠিকানা',
            flex: 0.5,
        },
    ]

    return (
        <div className='space-y-5 rounded-md bg-white p-5'>
            <Box>
                <DataGrid
                    loading={isCustomerLoading || !customerQuery?.customers}
                    getRowId={(row) => row._id}
                    autoPageSize
                    rows={customerQuery?.customers || []}
                    columns={columns}
                    rowCount={(customerQuery && customerQuery.customersLenght) || 0}
                    pagination
                    page={page}
                    pageSize={pageSize}
                    paginationMode='server'
                    onPageChange={(newPage) => setPage(newPage)}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                />
            </Box>
        </div>
    )
}

export default CustomerTable
