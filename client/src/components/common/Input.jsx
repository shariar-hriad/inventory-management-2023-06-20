import { Field } from 'formik'
import { twMerge } from 'tailwind-merge'
import CustomError from './CustomError'

const Input = ({ name, label, className, ...rest }) => {
    return (
        <div className={twMerge('flex flex-col space-y-2', className)}>
            <label className='text-lg tracking-wider' htmlFor={name}>
                {label}
            </label>
            <Field className='h-[60px] rounded-md border border-primary px-3 text-[20px]' name={name} {...rest} />
            <CustomError name={name} />
        </div>
    )
}

export default Input
