import LoginForm from '../components/form/LoginForm'

const Login = () => {
    return (
        <section className='flex h-screen items-center justify-start bg-slate-800'>
            <div className='mx-auto w-full max-w-[300px] flex-shrink-0 rounded-md bg-white px-[40px] py-[60px] shadow-md lg:max-w-[450px]'>
                <h2 className='text-[40px] font-bold'>
                    Welcome to <b>Ms. Tareq Enterprise</b>
                </h2>
                <p className='mb-5 text-lg text-gray-500'>Please login to continue...</p>
                <LoginForm />
            </div>
        </section>
    )
}

export default Login
