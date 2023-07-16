import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import CashMemoTable from '../components/dataTable/CashMemoTable'

const CashMemo = () => {
    return (
        <Wrapper>
            <Heading title='Cash Memo' subtitle='Manage your Cash Memo' />
            <CashMemoTable />
        </Wrapper>
    )
}

export default CashMemo
