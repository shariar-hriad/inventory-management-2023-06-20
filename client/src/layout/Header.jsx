import { HiOutlineBars3CenterLeft } from 'react-icons/hi2'

const Header = () => {
    return (
        <header className='fixed left-[260px] z-50 flex h-[60px] w-full items-center bg-white px-[20px] shadow'>
            <button type='button' className='text-[25px]'>
                <HiOutlineBars3CenterLeft />
            </button>
        </header>
    )
}

export default Header
