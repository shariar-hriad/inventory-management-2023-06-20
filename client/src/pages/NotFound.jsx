import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className='flex h-screen items-center justify-center bg-gray-950 text-white'>
            <div className='p-5 text-center'>
                <h2 className='text-[40px] font-bold leading-[45px] text-white lg:text-[70px] lg:leading-[80px]'>
                    404!
                </h2>
                <p className='mb-5 text-gray-300'>Your requested page not found!</p>
                <NavLink
                    className='rounded-md bg-gray-200 px-5 py-2 text-base font-bold text-black transition-all hover:bg-gray-300'
                    to='/admin'
                >
                    Back to Dashboard
                </NavLink>
            </div>
        </section>
    )
}

export default NotFound
