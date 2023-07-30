import { Form, Formik } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetCustomersQuery } from '../../store/api'
import { getAllCustomer } from '../../store/features/customer/customerSlice'
import Button from '../common/Button'
import Input from '../common/Input'

const initialValues = {
    productList: [],
    customerName: '',
    newcustomerName: '',
    phonenumber: '',
    address: '',
}

const SaleForm = () => {
    const { customers } = useSelector((state) => state.customers)
    console.log(customers)
    const { data } = useGetCustomersQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCustomer(data))
    }, [data, dispatch])

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <div className='mt-5 flex gap-x-5 rounded-md border p-5 shadow-md'>
                    <Input className='flex-1' name='newcustomerName' label='নতুন গ্রাহকের নাম' />
                    <Input className='flex-1' name='phonenumber' label='গ্রাহকের মোবাইল নাম্বার' />
                    <Input className='flex-1' name='address' label='গ্রাহকের ঠিকানা' />
                </div>
                <Button className='mt-5 font-normal shadow-md' type='submit' title='ইনভয়েস সংরক্ষণ' />
            </Form>
        </Formik>
    )
}

export default SaleForm
