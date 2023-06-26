import AddButton from '../components/common/AddButton'
import Heading from '../components/common/Heading'
import FlexBetween from '../components/layout/FlexBetween'
import Wrapper from '../components/layout/Wrapper'

const Products = () => {
    return (
        <Wrapper>
            <FlexBetween>
                <Heading title={'Product List'} subtitle={'Manage your Products'} />
                <AddButton title='Add Product' />
            </FlexBetween>
        </Wrapper>
    )
}

export default Products
