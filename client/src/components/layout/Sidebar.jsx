import { BiAddToQueue, BiCategoryAlt } from 'react-icons/bi'
import { BsFillCartDashFill } from 'react-icons/bs'
import { FaPeopleCarry, FaProductHunt, FaTags } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className='bottom-0 left-0 top-[60px] z-50 hidden w-[260px]  border-r bg-primary/80 p-[10px] md:fixed md:block'>
            {/* Sidebar Menu */}
            <div className='px-[10px]'>
                <ul className='space-y-5'>
                    <li className='border-b pb-4'>
                        <h6 className='mb-2 text-[15px] capitalize text-gray-900'>মেইন</h6>
                        <ul className='ml-3 space-y-2'>
                            <li className='traking-wider rounded-md bg-gray-100 text-lg font-medium'>
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
                            <li className='traking-wider rounded-md bg-gray-100 text-lg font-medium'>
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
                            <li className='traking-wider rounded-md bg-gray-100 text-lg font-medium'>
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
                                        প্রোডাক্টের তালিকা
                                    </NavLink>
                                </span>
                            </li>
                            <li className='traking-wider rounded-md bg-gray-100 text-lg font-medium'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/add-product'
                                >
                                    <BiAddToQueue />
                                    প্রোডাক্ট যোগ করুন
                                </NavLink>
                            </li>
                            <li className='traking-wider rounded-md bg-gray-100 text-lg font-medium'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/category'
                                >
                                    <BiCategoryAlt />
                                    ক্যাটাগরির তালিকা
                                </NavLink>
                            </li>
                            <li className='traking-wider rounded-md bg-gray-100 text-lg font-medium'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/brands'
                                >
                                    <FaTags />
                                    ব্রান্ডের তালিকা
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    {/* Peoples */}
                    <li className='border-b pb-4'>
                        <h6 className='mb-2 text-[15px] capitalize text-gray-900'>Peoples</h6>
                        <ul className='ml-3 space-y-2'>
                            <li className='traking-wider rounded-md bg-gray-100 text-lg font-medium'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/customers'
                                >
                                    <FaPeopleCarry />
                                    কাস্টমারের তালিকা
                                </NavLink>
                            </li>
                            <li className='traking-wider rounded-md bg-gray-100 text-lg font-medium'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/add-customer'
                                >
                                    <FaPeopleCarry />
                                    কাস্টমার যোগ করুন
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    {/* Sales */}
                    <li className='border-b pb-4'>
                        <h6 className='mb-2 text-[15px] capitalize text-gray-900'>Sales and Purchase</h6>
                        <ul className='ml-3 space-y-2'>
                            <li className='traking-wider rounded-md bg-gray-100 text-lg font-medium'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/sales'
                                >
                                    <FaPeopleCarry />
                                    বিক্রির তালিকা
                                </NavLink>
                            </li>
                            <li className='traking-wider rounded-md bg-gray-100 text-lg font-medium'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/purchased'
                                >
                                    <FaPeopleCarry />
                                    ক্রয়ের তালিকা
                                </NavLink>
                            </li>
                            <li className='traking-wider rounded-md bg-gray-100 text-lg font-medium'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'flex items-center gap-2 rounded-md bg-[#1B2850] px-3 py-2 text-white'
                                            : 'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-[#1B2850] hover:text-white'
                                    }
                                    to='/admin/cash-memo'
                                >
                                    <FaPeopleCarry />
                                    ক্যাশ মেমো
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
