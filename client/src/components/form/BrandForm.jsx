import { Form, Formik } from 'formik'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { object, string } from 'yup'
import { postBrand } from '../../services'
import { createBrand } from '../../store/features/brand/brandSlice'
import Button from '../common/Button'
import Input from '../common/Input'

const initialValues = {
    brandTitle: '',
}

const validationSchema = object({
    brandTitle: string().required('অবশ্যই ব্রান্ডের নাম দিতে হবে!'),
})

const BrandForm = () => {
    const dispatch = useDispatch()

    const onSubmit = async (values, actions) => {
        const brand = await postBrand(values.brandTitle)
        dispatch(createBrand(brand))
        toast.success('Brand created successfully')
        actions.resetForm((nextState) => {
            nextState.brandTitle = ''
        })
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className='flex items-end gap-2'>
                    <Input className='w-2/3' name='brandTitle' label='নতুন ব্রান্ড তৈরি করুন' />
                    <Button type='submit' title='যােগ করুন' />
                </div>
            </Form>
        </Formik>
    )
}

export default BrandForm
