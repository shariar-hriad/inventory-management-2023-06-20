import { BsCart4 } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='fixed flex h-[60px] w-full items-center justify-between bg-white px-[20px] pr-[50px] shadow'>
            <div className='flex gap-[150px]'>
                <h2 className='text-2xl font-bold leading-[24px]'>
                    ms.Tareq <br />
                    <small className='text-[14px]'>Enterprise</small>
                </h2>

                <button type='button' className='text-[25px]'>
                    <HiOutlineBars3CenterLeft />
                </button>
            </div>

            <Link to='/admin/cart' className='flex items-center gap-4'>
                <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-200 ring'>
                    <FaUserCircle fontSize={30} />
                </div>
                <div className='relative cursor-pointer'>
                    <BsCart4 className='text-gray-500' fontSize={30} />
                    <span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-medium'>
                        5
                    </span>
                </div>
            </Link>
        </header>
    )
}

export default Header
