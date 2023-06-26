import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { FiUser } from 'react-icons/fi'
import dash1 from '../assets/dash1.svg'
import Wrapper from '../components/layout/Wrapper'

const Dashboard = () => {
    const [totalCustomer, setTotalCustomer] = useState(null)

    useEffect(() => {
        const fetchCustomerLength = async () => {
            const response = await fetch('http://localhost:5000/api/v1/customer/total')
            const data = await response.json()

            setTotalCustomer(data.total)
        }

        fetchCustomerLength()
    }, [])

    return (
        <Wrapper>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
                <DashWidget img={dash1} price={302154} description='Total Purchase Due' />
                <DashWidget img={dash1} price={456} description='Total Sales Due' />
                <DashWidget img={dash1} price={454545645} description='Total Sale Amount' />
                <DashWidget img={dash1} price={40000} description='Total Sale Amount' />
                <DashCount className='bg-[#ff9f43]' icon={FiUser} total={100} title='Total Products' />
                <DashCount className='bg-[#50c8ad]' icon={FiUser} total={100} title='Suppliers' />
                <DashCount className='bg-[#1B2850]' icon={FiUser} total={totalCustomer} title='Customers' />
                <DashCount className='bg-[#28C76F]' icon={FiUser} total={100} title='Suppliers' />
            </div>
        </Wrapper>
    )
}

export default Dashboard

const DashWidget = ({ img, price, description }) => {
    return (
        <div className='flex items-center gap-4 rounded border p-4'>
            <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-emerald-500'>
                <img src={img} alt='' />
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-bold'>${price}</h3>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    )
}

const DashCount = ({ icon, total, title, className }) => {
    const Icon = icon

    return (
        <div className={`flex items-center justify-between gap-4 rounded p-4 ${className}`}>
            <div className='flex flex-col gap-1'>
                <h3 className='text-lg font-bold text-white'>{total || 0}</h3>
                <p className='text-white'>{title}</p>
            </div>
            <Icon className='text-white' fontSize={45} />
        </div>
    )
}

DashWidget.propTypes = {
    img: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
}

DashCount.propTypes = {
    icon: PropTypes.any,
    total: PropTypes.number,
    title: PropTypes.string,
    className: PropTypes.string,
}
