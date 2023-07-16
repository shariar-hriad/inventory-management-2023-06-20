import { Form, Formik } from 'formik'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { number, object, string } from 'yup'
import { createNewCustomer } from '../../services'
import { createCustomer } from '../../store/features/customer/customerSlice'
import Button from '../common/Button'
import Input from '../common/Input'

const initialValues = {
    customerName: '',
    phoneNumber: '',
    customerAddress: '',
}

const validationSchema = object({
    customerName: string().required('Customer Name must be provided'),
    phoneNumber: number().required('Phone Number must be provided'),
    customerAddress: string().required('Customer Address must be provid'),
})

const CustomerForm = () => {
    const dispatch = useDispatch()

    const onSubmit = async (values, actions) => {
        const customer = await createNewCustomer(values)
        actions.resetForm({
            values: {
                customerName: '',
                phoneNumber: '',
                customerAddress: '',
            },
        })
        dispatch(createCustomer(customer))
        toast.success('Customer created successfully')
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur onSubmit={onSubmit}>
            <Form>
                <div className='grid gap-3 md:grid-cols-3'>
                    <Input name='customerName' type='text' label='Customer Name' />
                    <Input name='phoneNumber' type='number' label='Phone Number' />
                    <Input as='textarea' name='customerAddress' label='Customer Address' />
                </div>
                <Button title='Save Customer' />
            </Form>
        </Formik>
    )
}

export default CustomerForm
