import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { object, string } from 'yup'
import Button from '../common/Button'
import Input from '../common/Input'

const initialValues = {
    categoryTitle: '',
}

const validationSchema = object({
    categoryTitle: string().required('Brand name is required!'),
})

const CategoryForm = () => {
    const dispatch = useDispatch()

    const onSubmit = (values, actions) => {
        console.log(values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className='space-y-2'>
                    <Input className='w-1/3' name='categoryTitle' label='Add Category Name' />
                    <Button type='submit' title='Add Category' />
                </div>
            </Form>
        </Formik>
    )
}

export default CategoryForm
