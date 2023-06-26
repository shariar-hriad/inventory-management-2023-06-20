import { Field, Form, Formik } from 'formik'

const ProductForm = () => {
    return (
        <Formik className='rounded-md border bg-white p-5'>
            <Form>
                <div className='grid grid-cols-1 gap-3 lg:grid-cols-4'>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor='productName'>Product Name</label>
                        <Field className='rounded-md border p-2 outline-[#FE9F43]' name='productName' />
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label htmlFor='category'>Category</label>
                        <Field as='select' className='rounded-md border p-2 outline-[#FE9F43]' name='category'>
                            <option value=''>Choose Category</option>
                            <option value='computer'>Computer</option>
                        </Field>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label htmlFor='brand'>Brand</label>
                        <Field as='select' className='rounded-md border p-2 outline-[#FE9F43]' name='brand'>
                            <option value=''>Choose Brand</option>
                            <option value='rfl'>RFL</option>
                        </Field>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label htmlFor='unit'>Unit</label>
                        <Field as='select' className='rounded-md border p-2 outline-[#FE9F43]' name='unit'>
                            <option value=''>Choose Unit</option>
                            <option value='unit'>Unit</option>
                        </Field>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label htmlFor='sku'>SKU</label>
                        <Field className='rounded-md border p-2 outline-[#FE9F43]' name='sku' />
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label htmlFor='quantity'>Quantity</label>
                        <Field className='rounded-md border p-2 outline-[#FE9F43]' name='quantity' />
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label htmlFor='price'>Price</label>
                        <Field className='rounded-md border p-2 outline-[#FE9F43]' name='price' />
                    </div>
                </div>

                <div className='space-x-3 py-5'>
                    <button
                        className='rounded-md border-transparent bg-[#FE9F43] px-5 py-2 font-bold uppercase text-white transition-all hover:bg-[#FE9F43]/90 hover:shadow-md'
                        type='submit'
                    >
                        Submit
                    </button>
                    <button className='rounded-md border bg-[] px-5 py-2 font-bold uppercase' type='button'>
                        Cancel
                    </button>
                </div>
            </Form>
        </Formik>
    )
}

export default ProductForm
