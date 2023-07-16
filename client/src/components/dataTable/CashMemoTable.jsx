import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import CheckBox from '../common/CheckBox'

const CashMemoTable = () => {
    return (
        <div className='rounded-md border bg-white p-5'>
            <div className='relative overflow-x-auto'>
                <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
                    <thead className='border-b bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className='p-4'>
                                <CheckBox />
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                CashMemo Id
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Customer Id
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Customer Name
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Phone Number
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Product List
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Total Price
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
                            <td className='w-4 p-4'>
                                <CheckBox />
                            </td>
                            <th
                                scope='row'
                                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                            >
                                649a60a22dd61382dc16ce12
                            </th>
                            <td
                                scope='row'
                                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                            >
                                649a60a22dd61382dc16ce12
                            </td>
                            <td
                                scope='row'
                                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                            >
                                Riad
                            </td>
                            <td
                                scope='row'
                                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                            >
                                01631448340
                            </td>
                            <td
                                scope='row'
                                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                            >
                                <ul>
                                    <li>Motor(2)</li>
                                    <li>Fan(2)</li>
                                </ul>
                            </td>
                            <td
                                scope='row'
                                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                            >
                                1000000
                            </td>
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

                        {/* <tr className='bg-gray-50'>
                                <td colSpan={3}>
                                    <div className='flex h-[150px] items-center justify-center'>
                                        <p className='m-0 text-xl font-medium'>No Brand is created!</p>
                                    </div>
                                </td>
                            </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CashMemoTable
