import { Field, Form, Formik } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetCustomerQuery } from '../../store/api'
import { getAllCustomer } from '../../store/features/customer/customerSlice'
import Button from '../common/Button'
import CustomError from '../common/CustomError'
import Input from '../common/Input'

const initialValues = {
    productList: [],
    customerName: '',
    newcustomerName: '',
    phonenumber: '',
    address: '',
}

const SaleForm = () => {
    const { customer } = useSelector((state) => state.customer)
    console.log(customer)
    const { data, isLoading } = useGetCustomerQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCustomer(data))
    }, [data, dispatch])

    const onSubmit = (values, actions) => {
        console.log(values)
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <div className='grid grid-cols-1 gap-3 lg:grid-cols-4'>
                    <Input type='text' name='productName' label='দ্রব্যের নাম' />
                    <div className='flex flex-col space-y-2'>
                        <label className='text-lg tracking-wider' htmlFor='customer'>
                            পুরাতন গ্রাহক
                        </label>
                        <Field as='select' className='h-[60px] rounded-md border px-3 text-[20px]' name='customerName'>
                            <option value=''>নিচে থেকে গ্রাহক নিরবাচন করুন</option>
                            {!isLoading &&
                                customer?.map((item) => (
                                    <option key={item._id} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                        </Field>
                        <CustomError name='customerName' />
                    </div>
                </div>
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
