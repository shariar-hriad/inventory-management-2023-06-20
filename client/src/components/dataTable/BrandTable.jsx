import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { removeBrand } from '../../services'
import { useGetBrandsQuery } from '../../store/api'
import { deleteBrand, getBrand } from '../../store/features/brand/brandSlice'
import CheckBox from '../common/CheckBox'
// import Loading from '../common/Loading'

const BrandTable = () => {
    const { brand } = useSelector((state) => state.brand)
    const { data, isLoading } = useGetBrandsQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBrand(data))
    }, [dispatch, data])

    const handleDelete = async (id) => {
        await removeBrand(id)
        dispatch(deleteBrand(id))
        toast.success('Brand deleted successfully')
    }

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
                                Brand name
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {brand ? (
                            brand.map((item) => {
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
                                            {item.title}
                                        </th>
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
                            })
                        ) : (
                            <tr className='bg-gray-50'>
                                <td colSpan={3}>
                                    <div className='flex h-[150px] items-center justify-center'>
                                        <p className='m-0 text-xl font-medium'>No Brand is created!</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BrandTable

//  {
//      isLoading && <Loading />
//  }

//  {
//      !brand && !isLoading ? (
//          <div className='text-red-500'>
//              <p>No Brand Found...</p>
//          </div>
//      ) : null
//  }
