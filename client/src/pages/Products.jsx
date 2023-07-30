import { Link } from 'react-router-dom'
import FlexBetween from '../components/common/FlexBetween'
import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import ProductTable from '../components/dataTable/ProductTable'

const Products = () => {
    return (
        <Wrapper>
            <FlexBetween>
                <Heading title='প্রডাক্টের তালিকা' subtitle='প্রডাক্টের তালিকা মেনেজ করুন' />
                <Link to='/admin/add-product' className='primary-btn py-3 text-lg tracking-wider shadow-md'>
                    নতুন প্রডাক্ট যোগ করুন
                </Link>
            </FlexBetween>

            <ProductTable />
        </Wrapper>
    )
}

export default Products
