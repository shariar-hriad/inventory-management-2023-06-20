/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import CheckBox from '../components/common/CheckBox'
import Heading from '../components/common/Heading'
import Loading from '../components/common/Loading'
import Wrapper from '../components/layout/Wrapper'
import { postCustomer } from '../services'
import { useGetCustomerQuery } from '../store/api'
import { getAllCustomer } from '../store/features/customer/customerSlice'

const Customer = () => {
    const { customer } = useSelector((state) => state.customer)
    const { data, isLoading } = useGetCustomerQuery()
    const nameRef = useRef(null)
    const phoneRef = useRef(null)
    const addressRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCustomer(data))
    }, [data, dispatch])

    const handlePostCustomer = async (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const phone = phoneRef.current.value
        const address = addressRef.current.value

        const newCustomer = await postCustomer(name, phone, address)
        toast.success('Customer created successfully')
    }

    return (
        <Wrapper>
            <Heading title='Customer List' subtitle='Manage Your Customers' />

            <div className='mb-5 rounded-md border bg-white p-5'>
                <h3 className='mb-5 text-2xl font-bold'>Add New Customer</h3>

                {/* add customer form */}
                <form onSubmit={handlePostCustomer}>
                    <div className='grid gap-3 md:grid-cols-4'>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-gray-500' htmlFor='customerName'>
                                Customer Name
                            </label>
                            <input
                                ref={nameRef}
                                className='w-full rounded border-gray-200'
                                type='text'
                                name='customerName'
                                placeholder='customer name...'
                            />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label className='text-gray-500' htmlFor='phone'>
                                Phone Number
                            </label>
                            <input
                                ref={phoneRef}
                                className='w-full rounded border-gray-200'
                                type='text'
                                name='phone'
                                placeholder='customer phone...'
                            />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label className='text-gray-500' htmlFor='address'>
                                Address
                            </label>
                            <textarea
                                ref={addressRef}
                                className='w-full rounded border-gray-200'
                                name='address'
                                id='address'
                            ></textarea>
                        </div>

                        <div className='flex items-center'>
                            <button
                                className='rounded border bg-orange-400 px-4 py-2 font-bold text-white'
                                type='submit'
                            >
                                Save Customer
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className='rounded-md bg-white p-5'>
                <div className='py-5'>
                    <div className='w-full max-w-xl'>
                        <form>
                            <label
                                htmlFor='customerSearch'
                                className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'
                            >
                                Search
                            </label>
                            <div className='relative'>
                                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                                    <svg
                                        aria-hidden='true'
                                        className='h-5 w-5 text-gray-500 dark:text-gray-400'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type='search'
                                    id='default-search'
                                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                                    placeholder='Search Customers...'
                                    required
                                />
                                <button
                                    type='submit'
                                    className='absolute bottom-2.5 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {isLoading && <Loading />}

                {customer && (
                    <div className='relative h-full overflow-x-auto shadow-md sm:rounded-lg'>
                        <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
                            <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
                                    <th scope='col' className='p-4'>
                                        <CheckBox />
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Id
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Customer Name
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Phone
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {customer?.map((item) => {
                                    return (
                                        <tr
                                            key={item._id}
                                            className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
                                        >
                                            <td className='w-4 p-4'>
                                                <CheckBox />
                                            </td>
                                            <th
                                                scope='row'
                                                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                                            >
                                                {item._id}
                                            </th>
                                            <td className='px-6 py-4 capitalize'>{item.name}</td>
                                            <td className='px-6 py-4'>{item.phoneNumber}</td>
                                            <td className='px-6 py-4'>
                                                <div className='flex gap-2'>
                                                    <button
                                                        className='rounded bg-gray-100 p-2 transition-all hover:shadow-md'
                                                        type='button'
                                                    >
                                                        <FiEdit />
                                                    </button>
                                                    <button
                                                        className='rounded bg-red-300/30 p-2 text-red-700 transition-all hover:shadow-md'
                                                        type='button'
                                                    >
                                                        <AiFillDelete />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default Customer
