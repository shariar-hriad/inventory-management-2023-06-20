import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'
import Button from '../common/Button'

const initialValues = {
    customerSearch: '',
}

const validationSchema = object({
    customerSearch: string().required('Search string is required for search results'),
})

const ProductSearch = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
            <div className='w-full max-w-xl py-5'>
                <Form>
                    <div className='flex gap-2'>
                        <Field
                            className='h-[60px] rounded-md border border-green-500 px-3 text-[20px] outline-primary'
                            name='customerSearch'
                            placeholder='কাস্টমারের নাম বা নম্বর দিয়ে ...'
                        />
                        <Button className='tracking-wider' type='submit' title='খুজুন' />
                    </div>
                    <ErrorMessage name='customerSearch' className='mt-3 font-medium text-red-500' component='p' />
                </Form>
            </div>
        </Formik>
    )
}

export default ProductSearch
