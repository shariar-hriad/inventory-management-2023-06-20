import CheckBox from '../common/CheckBox'

const CartTable = () => {
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
                                Product
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Price
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Quantity
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
                                Motor
                            </th>
                            <td
                                scope='row'
                                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                            >
                                10
                            </td>
                            <td
                                scope='row'
                                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                            >
                                <input className='h-8 w-[50px]' type='number' />
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
            <div className='ml-auto mt-5 w-1/4 border-t border-t-primary p-3'>
                <div className='flex justify-between'>
                    <h6 className='text-[25px] font-semibold'>Subtotal</h6>
                    <h5 className='text-[25px] font-semibold'>2000</h5>
                </div>
                <div className='flex justify-between'>
                    <h6 className='text-[25px] font-semibold'>Commission</h6>
                    <h5 className='text-[25px] font-semibold'>20</h5>
                </div>
                <h2 className='text-[30px] font-medium'>Procced to checkout--</h2>
            </div>
        </div>
    )
}

export default CartTable
