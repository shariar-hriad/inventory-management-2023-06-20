/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Heading from '../components/common/Heading'
import Loading from '../components/common/Loading'
import Wrapper from '../components/common/Wrapper'
import CustomerTable from '../components/dataTable/CustomerTable'
import CustomerForm from '../components/form/CustomerForm'
import { useGetCustomerQuery } from '../store/api'
import { getAllCustomer } from '../store/features/customer/customerSlice'

const Customer = () => {
    const { customer } = useSelector((state) => state.customer)
    const { data, isLoading } = useGetCustomerQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCustomer(data))
    }, [data, dispatch])

    return (
        <Wrapper>
            <Heading title='Customer List' subtitle='Manage Your Customers' />

            <div className='mb-5 rounded-md border bg-white p-5'>
                <h3 className='mb-5 text-2xl font-bold'>Add New Customer</h3>

                {/* add customer form */}
                <CustomerForm />
            </div>

            <div className='rounded-md bg-white p-5'>
                {isLoading && <Loading />}

                {customer && <CustomerTable customer={customer} />}
            </div>
        </Wrapper>
    )
}

export default Customer
