import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import ProductForm from '../components/form/ProductForm'

const AddProduct = () => {
    return (
        <Wrapper>
            <Heading title={'Product Add'} subtitle={'Create new product'} />
            <ProductForm />
        </Wrapper>
    )
}

export default AddProduct
