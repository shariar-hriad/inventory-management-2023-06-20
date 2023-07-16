import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import SalesTable from '../components/dataTable/SalesTable'

const Sales = () => {
    return (
        <Wrapper>
            <Heading title='Sales' subtitle='Manage your Sales' />
            <SalesTable />
        </Wrapper>
    )
}

export default Sales
