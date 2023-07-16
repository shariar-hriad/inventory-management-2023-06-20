/* eslint-disable react/no-unescaped-entities */

import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import BrandTable from '../components/dataTable/BrandTable'
import BrandForm from '../components/form/BrandForm'

const BrandList = () => {
    return (
        <Wrapper>
            <Heading title={'Brand List'} subtitle={'Manage your Brand'} />

            <div className='mb-5 rounded-md border bg-white p-5'>
                <h3 className='mb-5 text-2xl font-bold'>Add New Brand</h3>

                {/* add brand form */}
                <BrandForm />
            </div>

            <BrandTable />
        </Wrapper>
    )
}

export default BrandList
