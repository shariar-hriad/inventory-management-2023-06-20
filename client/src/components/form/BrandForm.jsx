import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { object, string } from 'yup'
import Button from '../common/Button'
import Input from '../common/Input'

const initialValues = {
    brandTitle: '',
}

const validationSchema = object({
    brandTitle: string().required('Brand name is required!'),
})

const BrandForm = () => {
    const dispatch = useDispatch()

    const onSubmit = (values, actions) => {
        console.log(values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className='space-y-2'>
                    <Input className='w-1/3' name='brandTitle' label='Add Brand Name' />
                    <Button type='submit' title='Add Brand' />
                </div>
            </Form>
        </Formik>
    )
}

export default BrandForm
