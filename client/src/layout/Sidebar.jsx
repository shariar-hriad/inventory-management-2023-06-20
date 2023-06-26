import { BiAddToQueue, BiCategoryAlt } from 'react-icons/bi'
import { FaPeopleCarry, FaProductHunt, FaTags } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Sidebar = () => {
    return (
        <aside className='fixed bottom-0 left-0 top-0 z-50 w-[260px] border-r bg-white p-[10px]'>
            {/* logo */}
            <div className='mb-5 px-[10px]'>
                <img className='h-[40px]' src={logo} alt='' />
            </div>

            {/* Sidebar Menu */}
            <div className='px-[10px]'>
                <ul className='space-y-5'>
                    <li className='border-b pb-4'>
                        <h6 className='mb-2 text-[15px] capitalize text-gray-900'>Main</h6>
                        <ul className='ml-3'>
                            <li className='rounded-md'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/'
                                >
                                    <RiDashboardFill />
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className='border-b pb-4'>
                        <h6 className='mb-2 text-[15px] capitalize text-gray-900'>Products</h6>
                        <ul className='ml-3 space-y-2'>
                            <li className='rounded-md bg-gray-100'>
                                <span className=''>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                                : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                        }
                                        to='/products'
                                    >
                                        <FaProductHunt />
                                        Products List
                                    </NavLink>
                                </span>
                            </li>
                            <li className='rounded-md bg-gray-100'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/add-product'
                                >
                                    <BiAddToQueue />
                                    Add Products
                                </NavLink>
                            </li>
                            <li className='rounded-md bg-gray-100'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/category'
                                >
                                    <BiCategoryAlt />
                                    Category List
                                </NavLink>
                            </li>
                            <li className='rounded-md bg-gray-100'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/brands'
                                >
                                    <FaTags />
                                    Brands
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className='space-y-5'>
                    <li className='border-b pb-4'>
                        <h6 className='mb-2 text-[15px] capitalize text-gray-900'>Peoples</h6>
                        <ul className='ml-3'>
                            <li className='rounded-md bg-gray-100'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/customers'
                                >
                                    <FaPeopleCarry />
                                    Customers
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* <div className='px-3'>
                <h4 className='capitalize text-sm text-gray-800'>Main</h4>
                <Link to='/'>Dashboard</Link>
            </div> */}
        </aside>
    )
}

export default Sidebar
