import { useRef } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { postBrand } from '../../services'
import { createBrand } from '../../store/features/brand/brandSlice'
import { hideModal } from '../../store/features/modal/modalSlice'

const AddBrandModal = () => {
    const { isOpen } = useSelector((state) => state.modal)
    const dispatch = useDispatch()
    const brandRef = useRef(null)

    const onSubmit = async (event) => {
        event.preventDefault()
        const brand = await postBrand(brandRef.current.value)
        brandRef.current.value = ''
        dispatch(createBrand(brand))
        toast.success('Brand added successfully')
        dispatch(hideModal())
    }

    const onClick = () => {
        dispatch(hideModal())
    }

    return (
        <div className={`${isOpen ? 'fixed inset-0' : 'hidden'} z-50 flex items-center justify-center bg-black/75`}>
            <div className='w-[300px] rounded-md bg-white p-5 shadow-md'>
                <h2 className='mb-3 text-2xl font-bold text-gray-600'>Add Brand</h2>

                <form onSubmit={onSubmit}>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-500' htmlFor='brandName'>
                            Brand Name
                        </label>
                        <input ref={brandRef} type='text' name='brandName' className='rounded border-gray-200' />
                    </div>
                    <div className='mt-3 flex gap-2'>
                        <button className='rounded border bg-orange-400 px-4 py-2 font-bold text-white' type='submit'>
                            Save Brand
                        </button>
                        <button onClick={onClick} className='rounded border px-4 py-2 font-bold' type='button'>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBrandModal
