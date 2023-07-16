import PropTypes from 'prop-types'
import toast from 'react-hot-toast'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { removeCustomer } from '../../services'
import { deleteCustomer } from '../../store/features/customer/customerSlice'
import CheckBox from '../common/CheckBox'

const CustomerTable = ({ customer }) => {
    const dispatch = useDispatch()

    const handleDelete = async (id) => {
        await removeCustomer(id)
        dispatch(deleteCustomer(id))
        toast.success('Customer deleted successfully')
    }

    return (
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
                            Address
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
                                <td className='px-6 py-4'>{item.address}</td>
                                <td className='px-6 py-4'>
                                    <div className='flex gap-2'>
                                        <button
                                            className='rounded bg-gray-100 p-2 transition-all hover:shadow-md'
                                            type='button'
                                        >
                                            <FiEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
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
    )
}

export default CustomerTable

CustomerTable.propTypes = {
    customer: PropTypes.array,
}
