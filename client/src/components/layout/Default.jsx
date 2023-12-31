import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

// eslint-disable-next-line react/prop-types
const Layout = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main className='pt-[60px] md:ml-[260px]'>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
