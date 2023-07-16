import { Field } from 'formik'
import PropTypes from 'prop-types'
import { lowercase } from '../../utils'
import CustomError from './CustomError'

const Select = ({ name, label, options = [] }) => {
    return (
        <div className='flex flex-col space-y-2'>
            <label className='text-lg' htmlFor={name}>
                {label}
            </label>
            <Field as='select' className='rounded-md border px-3 py-3 text-[20px]' name='productCategory'>
                <option value=''>Choose Category</option>
                {options.map((option) => (
                    <option key={option._id} value={lowercase(option.title)}>
                        {option.title}
                    </option>
                ))}
            </Field>
            <CustomError name='productCategory' />
        </div>
    )
}

export default Select

Select.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
}
