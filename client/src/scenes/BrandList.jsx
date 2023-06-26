/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import AddButton from '../components/common/AddButton'
import CheckBox from '../components/common/CheckBox'
import Heading from '../components/common/Heading'
import Loading from '../components/common/Loading'
import FlexBetween from '../components/layout/FlexBetween'
import Wrapper from '../components/layout/Wrapper'
import { postBrand, removeBrand } from '../services'
import { useGetBrandQuery } from '../store/api/api'
import { createBrand, deleteBrand, getBrand } from '../store/features/brand/brandSlice'
import { showModal } from '../store/features/modal/modalSlice'

const BrandList = () => {
    const { brand } = useSelector((state) => state.brand)
    const { data, isLoading } = useGetBrandQuery()
    const dispatch = useDispatch()
    const brandRef = useRef(null)

    useEffect(() => {
        dispatch(getBrand(data?.brand))
    }, [data, dispatch])

    const onClick = () => {
        dispatch(showModal())
    }

    const handleDelete = async (id) => {
        await removeBrand(id)
        dispatch(deleteBrand(id))
        toast.success('Brand deleted successfully')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const brand = await postBrand(brandRef.current.value)
        brandRef.current.value = ''
        dispatch(createBrand(brand))
        toast.success('Brand added successfully')
    }

    return (
        <Wrapper>
            <FlexBetween>
                <Heading title={'Brand List'} subtitle={'Manage your Brand'} />
                <AddButton onClick={onClick} title='Add Brand' />
            </FlexBetween>

            <div className='mb-5 rounded-md border bg-white p-5'>
                <h3 className='mb-5 text-2xl font-bold'>Add New Brand</h3>

                {/* add customer form */}
                <form onSubmit={handleSubmit}>
                    <div className='grid gap-3 md:grid-cols-4'>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-gray-500' htmlFor='brandName'>
                                Brand Name
                            </label>
                            <input
                                ref={brandRef}
                                className='w-full rounded border-gray-200'
                                type='text'
                                name='brandName'
                                placeholder='brand name...'
                            />
                        </div>

                        <div className='flex items-end'>
                            <button
                                className='rounded border bg-orange-400 px-4 py-2 font-bold text-white'
                                type='submit'
                            >
                                Save Brand
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className='rounded-md border bg-white p-5'>
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    {isLoading && <Loading />}

                    {!brand && (
                        <div className='p-5 text-red-500'>
                            <p>No Brand Found...</p>
                        </div>
                    )}

                    {brand && (
                        <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
                            <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
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
                                {brand?.map((item) => {
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
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default BrandList
