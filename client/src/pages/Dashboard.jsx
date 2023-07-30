/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { FiUser } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import dash1 from '../assets/dash1.svg'
import DashCount from '../components/common/DashCount'
import DashWidget from '../components/common/DashWidget'
import Wrapper from '../components/common/Wrapper'
import { useGetBrandsQuery, useGetCustomersQuery, useGetProductsQuery } from '../store/api'
import { setBrandsLength } from '../store/features/brand/brandSlice'
import { setCustomersLenght } from '../store/features/customer/customerSlice'
import { setProductsLenght } from '../store/features/product/productSlice'

const Dashboard = () => {
    const dispatch = useDispatch()

    const productsLenght = useSelector((state) => state.products.productsLenght)
    const customersLenght = useSelector((state) => state.customers.customersLenght)
    const brandsLenght = useSelector((state) => state.brands.brandsLenght)

    const { data: productsQuery, isProductsLoading } = useGetProductsQuery()
    const { data: customersQuery, isCustomerLoading } = useGetCustomersQuery()
    const { data: brandsQuery, isBrandsLoading } = useGetBrandsQuery()

    useEffect(() => {
        if (!isProductsLoading) dispatch(setProductsLenght(productsQuery?.productsLenght))
        if (!isCustomerLoading) dispatch(setCustomersLenght(customersQuery?.customersLenght))
        if (!isBrandsLoading) dispatch(setBrandsLength(brandsQuery?.brandsLenght))
    }, [dispatch, productsQuery, brandsQuery, customersQuery, isProductsLoading, isCustomerLoading, isBrandsLoading])

    return (
        <Wrapper>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
                <DashWidget img={dash1} price={'১০'} description='মােট ক্রয় বাকি' />
                <DashWidget img={dash1} price={'২০'} description='মােট বিক্রয় বাকি' />
                <DashWidget img={dash1} price={'৪০'} description='' />
                <DashWidget img={dash1} price={'১০০০'} description='' />
                <DashCount className='bg-[#ff9f43]' icon={FiUser} total={productsLenght} title='মােট প্রোডাক্ট' />
                <DashCount className='bg-[#1B2850]' icon={FiUser} total={customersLenght} title='মােট কাস্টমার' />
                <DashCount className='bg-[#28C76F]' icon={FiUser} total={brandsLenght} title='মােট ব্রান্ড' />
            </div>
        </Wrapper>
    )
}

export default Dashboard
