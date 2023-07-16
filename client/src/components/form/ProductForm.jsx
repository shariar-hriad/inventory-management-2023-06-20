import { Field, Form, Formik } from 'formik'
import { number, object, string } from 'yup'
import { useGetBrandsQuery } from '../../store/api'
import Button from '../common/Button'
import CustomError from '../common/CustomError'
import Input from '../common/Input'
import Select from '../common/Select'

const initialValues = {
    productName: '',
    productCategory: '',
    productBrand: '',
    productUnit: '',
    productSku: '',
    productQuantity: '',
    productPrice: '',
}

const validationSchema = object({
    productName: string().required('Product name is required!'),
    productCategory: string().required('Product category is required!'),
    productBrand: string().required('Product brand is required!'),
    productSku: number().required('Product sku is required!'),
    productQuantity: number().required('Product quantity is required!'),
    productPrice: number().required('Product price is required!'),
})

const ProductForm = () => {
    const { data } = useGetBrandsQuery()

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
            <div className='rounded-md border bg-white p-5'>
                <Form>
                    <div className='grid grid-cols-1 gap-3 lg:grid-cols-4'>
                        <Input type='text' name='productName' label='Product Name' />
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor='productCategory'>Category</label>
                            <Field as='select' className='rounded-md border px-3 py-2' name='productCategory'>
                                <option value=''>Choose Category</option>
                                <option value='computer'>Computer</option>
                            </Field>
                            <CustomError name='productCategory' />
                        </div>
                        <Select name='productBrand' label='Brand' options={data?.brand} />
                        <Input type='number' name='productSku' label='SKU' />
                        <Input type='number' name='productQuantity' label='Quantity' />
                        <Input type='number' name='productPrice' label='Price' />
                    </div>

                    <div className='space-x-3 py-5'>
                        <Button title='Save Customer' />
                    </div>
                </Form>
            </div>
        </Formik>
    )
}

export default ProductForm
