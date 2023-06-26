import PropTypes from 'prop-types'

const Input = ({ label, name, ...rest }) => {
    return (
        <div className='flex flex-col space-y-2'>
            <label className='text-sm text-[#212b36]' htmlFor={name}>
                {label}
            </label>
            <input className='rounded-md border p-2 outline-[#FE9F43]' name={name} {...rest} />
        </div>
    )
}

export default Input

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    rest: PropTypes.any,
}
