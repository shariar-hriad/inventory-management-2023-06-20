import Heading from '../components/common/Heading'
import ProductForm from '../components/form/ProductForm'
import Wrapper from '../components/layout/Wrapper'

const AddProduct = () => {
    return (
        <Wrapper>
            <Heading title={'Product Add'} subtitle={'Create new product'} />
            <ProductForm />
        </Wrapper>
    )
}

export default AddProduct
