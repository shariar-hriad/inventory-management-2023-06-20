import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import CustomerTable from '../components/dataTable/CustomerTable'

const Customer = () => {
    return (
        <Wrapper>
            <Heading title='কাস্টমারের তালিকা' subtitle='আপনার কাস্টমার মেনেজ করুন' />

            <CustomerTable />
        </Wrapper>
    )
}

export default Customer
