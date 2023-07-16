/* eslint-disable react/no-unescaped-entities */

import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import CategoryTable from '../components/dataTable/CategoryTable'
import CategoryForm from '../components/form/CategoryForm'

const CategoryList = () => {
    return (
        <Wrapper>
            <Heading title={'Category List'} subtitle={'Manage your Category'} />

            <div className='mb-5 rounded-md border bg-white p-5'>
                <h3 className='mb-5 text-2xl font-bold'>Add New Category</h3>

                {/* add brand form */}
                <CategoryForm />
            </div>

            <CategoryTable />
        </Wrapper>
    )
}

export default CategoryList
