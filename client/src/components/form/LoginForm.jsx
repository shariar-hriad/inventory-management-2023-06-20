import { Form, Formik } from 'formik'
import { object, string } from 'yup'

import { login } from '../../services'
import Button from '../common/Button'
import Input from '../common/Input'

const initialValues = {
    email: '',
    password: '',
}

const validationSchema = object({
    email: string().required('Email is required!'),
    password: string().required('Password is required!'),
})

const LoginForm = () => {
    const onSubmit = async (values) => {
        const user = await login(values)
        console.log(user)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className='space-y-5'>
                <Input type='email' name='email' label='Email' />
                <Input type='password' name='password' label='Password' />
                <Button type='submit' title='Login' />
            </Form>
        </Formik>
    )
}

export default LoginForm
