import { ErrorMessage } from 'formik'
import PropTypes from 'prop-types'

const CustomError = ({ name }) => {
    return <ErrorMessage className='text-base font-medium text-red-500' name={name} component='p' />
}

export default CustomError

CustomError.propTypes = {
    name: PropTypes.string,
}
