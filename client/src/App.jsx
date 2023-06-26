import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Default'
import AddProduct from './scenes/AddProduct'
import BrandList from './scenes/BrandList'
import CategoryList from './scenes/CategoryList'
import Customer from './scenes/Customer'
import Dashboard from './scenes/Dashboard'
import Products from './scenes/Products'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/add-product' element={<AddProduct />} />
                    <Route path='/category' element={<CategoryList />} />
                    <Route path='/brands' element={<BrandList />} />
                    <Route path='/customers' element={<Customer />} />
                </Route>
            </Routes>
            <Toaster />
        </>
    )
}

export default App
