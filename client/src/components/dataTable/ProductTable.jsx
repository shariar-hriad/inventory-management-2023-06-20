import { useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../services'
import { useGetProductsQuery } from '../../store/api'
import { getAllProduct } from '../../store/features/product/productSlice'
import CheckBox from '../common/CheckBox'
import Loading from '../common/Loading'
import ProductSearch from '../form/ProductSearch'

const ProductTable = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products.products)

    const { data: productsQuery, isProductLoading } = useGetProductsQuery()

    useEffect(() => {
        if (!isProductLoading) dispatch(getAllProduct(productsQuery?.products))
    }, [dispatch, productsQuery, isProductLoading])

    const handleDelete = async (id) => {
        await deleteProduct(id)
    }

    return (
        <div className='rounded-md border bg-white p-5'>
            <ProductSearch />

            {products ? (
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
                        <thead className='border-b bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='p-4'>
                                    <CheckBox />
                                </th>
                                <th scope='col' className='px-6 py-3 text-lg tracking-wider'>
                                    প্রডাক্টের নাম
                                </th>
                                <th scope='col' className='px-6 py-3 text-lg tracking-wider'>
                                    ব্রান্ড
                                </th>
                                <th scope='col' className='px-6 py-3 text-lg tracking-wider'>
                                    মুল্ল্য
                                </th>
                                <th scope='col' className='px-6 py-3 text-lg tracking-wider'>
                                    পরিমান
                                </th>
                                <th scope='col' className='px-6 py-3 text-lg tracking-wider'>
                                    বিক্রি হয়েছে
                                </th>
                                <th scope='col' className='px-6 py-3 text-lg tracking-wider'>
                                    একশন
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product) => (
                                <tr
                                    key={product?._id}
                                    className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
                                >
                                    <td className='w-4 p-4'>
                                        <CheckBox />
                                    </td>
                                    <th
                                        scope='row'
                                        className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                                    >
                                        {product?.title}
                                    </th>
                                    <td className='px-6 py-4'>{product?.brand}</td>
                                    <td className='px-6 py-4'>{product?.price}</td>
                                    <td className='px-6 py-4'>{product?.quantity}</td>
                                    <td className='px-6 py-4'>{product?.sold}</td>
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
                                                onClick={() => handleDelete(product?._id)}
                                            >
                                                <AiFillDelete />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {/* When there is no product */}
                            {/* <tr className='bg-gray-50'>
                            <td colSpan={7}>
                                <div className='flex h-[150px] items-center justify-center'>
                                    <p className='m-0 text-xl font-medium'>No Product is created!</p>
                                </div>
                            </td>
                        </tr> */}
                        </tbody>
                    </table>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default ProductTable
