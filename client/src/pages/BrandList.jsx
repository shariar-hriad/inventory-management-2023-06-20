/* eslint-disable react/no-unescaped-entities */

import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import BrandTable from '../components/dataTable/BrandTable'
import BrandForm from '../components/form/BrandForm'

const BrandList = () => {
    return (
        <Wrapper>
            <Heading title='ব্রান্ডের তালিকা' subtitle='আপনার ব্রান্ডের তালিকা মেনেজ করুন' />

            <div className='mb-5 rounded-md border bg-white p-5'>
                {/* add brand form */}
                <BrandForm />
            </div>

            <BrandTable />
        </Wrapper>
    )
}

export default BrandList
