import { FiUser } from 'react-icons/fi'
import dash1 from '../assets/dash1.svg'
import DashCount from '../components/common/DashCount'
import DashWidget from '../components/common/DashWidget'
import Wrapper from '../components/common/Wrapper'
import { useGetLengthOfCustomerQuery } from '../store/api'

const Dashboard = () => {
    const { data } = useGetLengthOfCustomerQuery()

    return (
        <Wrapper>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
                <DashWidget img={dash1} price={302154} description='Total Purchase Due' />
                <DashWidget img={dash1} price={456} description='Total Sales Due' />
                <DashWidget img={dash1} price={454545645} description='Total Sale Amount' />
                <DashWidget img={dash1} price={40000} description='Total Sale Amount' />
                <DashCount className='bg-[#ff9f43]' icon={FiUser} total={100} title='Total Products' />
                <DashCount className='bg-[#50c8ad]' icon={FiUser} total={100} title='Suppliers' />
                <DashCount className='bg-[#1B2850]' icon={FiUser} total={data} title='Customers' />
                <DashCount className='bg-[#28C76F]' icon={FiUser} total={100} title='Suppliers' />
            </div>
        </Wrapper>
    )
}

export default Dashboard
