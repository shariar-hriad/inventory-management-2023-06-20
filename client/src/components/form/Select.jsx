import PropTypes from 'prop-types'

const Select = ({ label, name, options = [], ...rest }) => {
    return (
        <div className='flex flex-col space-y-2'>
            <label className='text-sm text-[#212b36]' htmlFor={name}>
                {label}
            </label>
            <select className='rounded-md border p-2 outline-[#FE9F43]' name={name} {...rest}>
                {options.map((option, i) => (
                    <option key={i} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select

Select.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    rest: PropTypes.any,
    options: PropTypes.array,
}
