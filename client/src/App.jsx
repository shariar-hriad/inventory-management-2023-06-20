import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Default'
import {
    AddCustomer,
    AddProduct,
    BrandList,
    Cart,
    CashMemo,
    CategoryList,
    Customer,
    Dashboard,
    Login,
    NewSale,
    NotFound,
    Products,
    Purchased,
    Sales,
} from './pages'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/admin' element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='new-sale' element={<NewSale />} />
                    <Route path='products' element={<Products />} />
                    <Route path='add-product' element={<AddProduct />} />
                    <Route path='category' element={<CategoryList />} />
                    <Route path='brands' element={<BrandList />} />
                    <Route path='customers' element={<Customer />} />
                    <Route path='add-customer' element={<AddCustomer />} />
                    <Route path='sales' element={<Sales />} />
                    <Route path='purchased' element={<Purchased />} />
                    <Route path='cash-memo' element={<CashMemo />} />
                </Route>
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <Toaster />
        </>
    )
}

export default App
