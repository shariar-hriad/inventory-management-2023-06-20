import { Field } from 'formik'
import CustomError from './CustomError'

const Select = ({ name, label, options = [] }) => {
    return (
        <div className='flex flex-col space-y-2'>
            <label className='text-lg tracking-wider' htmlFor={name}>
                {label}
            </label>
            <Field as='select' className='h-[60px] rounded-md border-primary px-3 text-[20px]' name='productCategory'>
                <option value=''>Choose Category</option>
                {options.map((option) => (
                    <option key={option?._id} value={option?.title}>
                        {option?.title}
                    </option>
                ))}
            </Field>
            <CustomError name='productCategory' />
        </div>
    )
}

export default Select
