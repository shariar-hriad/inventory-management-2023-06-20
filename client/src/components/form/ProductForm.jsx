import { Form, Formik } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { number, object, string } from 'yup'
import { useGetBrandsQuery, useGetCategoryQuery } from '../../store/api'
import { getBrands } from '../../store/features/brand/brandSlice'
import Button from '../common/Button'
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
    const dispatch = useDispatch()

    const brands = useSelector((state) => state.brands.brands)
    console.log('brands :', brands)

    const { data: brandsQuery, isBrandsLoading } = useGetBrandsQuery()
    const { data: categoryQuery, isCategoryLoading } = useGetCategoryQuery()
    console.log('category :', categoryQuery)

    useEffect(() => {
        if (!isBrandsLoading) dispatch(getBrands(brandsQuery?.brands))
    }, [brandsQuery?.brands, dispatch, isBrandsLoading])

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
                        <Select name='productCategory' label='প্রােডাক্টের কেটাগরি' options={categoryQuery} />
                        <Select name='productBrand' label='Brand' options={brands} />
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
