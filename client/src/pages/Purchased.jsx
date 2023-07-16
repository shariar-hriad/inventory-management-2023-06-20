import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import PurchasedTable from '../components/dataTable/PurchasedTable'

const Purchased = () => {
    return (
        <Wrapper>
            <Heading title='Purchased' subtitle='Manage your Purchased Items' />
            <PurchasedTable />
        </Wrapper>
    )
}

export default Purchased
