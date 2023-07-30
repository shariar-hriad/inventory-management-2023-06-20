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
    customerName: string().required('অবশ্যই কাস্টমারের নাম দিতে হবে'),
    phoneNumber: number().required('অবশ্যই কাস্টমারের নম্বর দিতে হবে'),
    customerAddress: string().required('অবশ্যই কাস্টমারের ঠিকানা দিতে হবে'),
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
                    <Input name='customerName' type='text' label='কাস্টমারের নাম' />
                    <Input name='phoneNumber' type='text' label='কাস্টমারের নম্বর' />
                    <Input as='textarea' name='customerAddress' label='কাস্টমারের ঠিকানা' />
                    <Button className='tracking-wider' title='কাস্টমার যােগ করুন' />
                </div>
            </Form>
        </Formik>
    )
}

export default CustomerForm
