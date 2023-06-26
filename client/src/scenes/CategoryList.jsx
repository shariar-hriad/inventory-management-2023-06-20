import AddButton from '../components/common/AddButton'
import Heading from '../components/common/Heading'
import FlexBetween from '../components/layout/FlexBetween'
import Wrapper from '../components/layout/Wrapper'

const CategoryList = () => {
    return (
        <Wrapper>
            <FlexBetween>
                <Heading title={'Product Category List'} subtitle={'View/Search product Category'} />
                <AddButton title='Add Category' />
            </FlexBetween>

            <div className='rounded-md border bg-white p-5'></div>
        </Wrapper>
    )
}

export default CategoryList
