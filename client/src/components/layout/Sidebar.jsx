import { BiAddToQueue, BiCategoryAlt } from 'react-icons/bi'
import { BsFillCartDashFill } from 'react-icons/bs'
import { FaPeopleCarry, FaProductHunt, FaTags } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className='fixed bottom-0 left-0 top-[60px]  z-50 w-[260px] border-r bg-slate-300 p-[10px]'>
            {/* Sidebar Menu */}
            <div className='px-[10px]'>
                <ul className='space-y-5'>
                    <li className='border-b pb-4'>
                        <h6 className='mb-2 text-[15px] capitalize text-gray-900'>Main</h6>
                        <ul className='ml-3 space-y-2'>
                            <li className='rounded-md bg-gray-100'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin'
                                >
                                    <RiDashboardFill />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className='rounded-md bg-gray-100'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/new-sale'
                                >
                                    <BsFillCartDashFill />
                                    New Sale
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
                                        to='/admin/products'
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
                                    to='/admin/add-product'
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
                                    to='/admin/category'
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
                                    to='/admin/brands'
                                >
                                    <FaTags />
                                    Brands
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    {/* Peoples */}
                    <li className='border-b pb-4'>
                        <h6 className='mb-2 text-[15px] capitalize text-gray-900'>Peoples</h6>
                        <ul className='ml-3 space-y-2'>
                            <li className='rounded-md bg-gray-100'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/customers'
                                >
                                    <FaPeopleCarry />
                                    Customers
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    {/* Sales */}
                    <li className='border-b pb-4'>
                        <h6 className='mb-2 text-[15px] capitalize text-gray-900'>Sales and Purchase</h6>
                        <ul className='ml-3 space-y-2'>
                            <li className='rounded-md bg-gray-100'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/sales'
                                >
                                    <FaPeopleCarry />
                                    Sales
                                </NavLink>
                            </li>
                            <li className='rounded-md bg-gray-100'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/purchased'
                                >
                                    <FaPeopleCarry />
                                    Purchased
                                </NavLink>
                            </li>
                            <li className='rounded-md bg-gray-100'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/cash-memo'
                                >
                                    <FaPeopleCarry />
                                    Cash Memo
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
