import { Link } from 'react-router-dom'
import FlexBetween from '../components/common/FlexBetween'
import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import ProductTable from '../components/dataTable/ProductTable'

const Products = () => {
    return (
        <Wrapper>
            <FlexBetween>
                <Heading title={'Product List'} subtitle={'Manage your Products'} />
                <Link to='/admin/add-product' className='primary-btn'>
                    Add New Product
                </Link>
            </FlexBetween>

            <ProductTable />
        </Wrapper>
    )
}

export default Products
