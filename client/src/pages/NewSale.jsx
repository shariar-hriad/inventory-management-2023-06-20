import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import SaleForm from '../components/form/SaleForm'

const NewSale = () => {
    return (
        <Wrapper>
            <Heading title='নতুন বিক্রি' subtitle='নতুন বিক্রির জন্য ইনভয়েস তৈরি করুন' />
            <SaleForm />
        </Wrapper>
    )
}

export default NewSale
