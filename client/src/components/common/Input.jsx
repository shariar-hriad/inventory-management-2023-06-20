import { Field } from 'formik'
import PropTypes from 'prop-types'
import CustomError from './CustomError'

const Input = ({ name, label, className, ...rest }) => {
    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            <label className='text-lg tracking-wider' htmlFor={name}>
                {label}
            </label>
            <Field
                className='h-[60px] rounded-md border border-green-500 px-3 text-[20px] outline-primary'
                name={name}
                {...rest}
            />
            <CustomError name={name} />
        </div>
    )
}

export default Input

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
}
