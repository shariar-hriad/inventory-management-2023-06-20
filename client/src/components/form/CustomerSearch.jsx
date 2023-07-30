import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'
import Button from '../common/Button'

const initialValues = {
    customerSearch: '',
}

const validationSchema = object({
    customerSearch: string().required('Search string is required for search results'),
})

const CustomerSearch = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
            <div className='w-full max-w-xl py-5'>
                <Form>
                    <div className='relative'>
                        <Field
                            type='search'
                            name='customerSearch'
                            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                            placeholder='Search Customers...'
                        />
                        <Button type='submit'>Search</Button>
                    </div>
                    <ErrorMessage name='customerSearch' className='mt-3 font-medium text-red-500' component='p' />
                </Form>
            </div>
        </Formik>
    )
}

export default CustomerSearch
