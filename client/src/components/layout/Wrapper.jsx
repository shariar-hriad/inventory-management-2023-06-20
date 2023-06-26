import PropTypes from 'prop-types'

const Wrapper = ({ children }) => {
    return <div className='p-5'>{children}</div>
}

export default Wrapper

Wrapper.propTypes = {
    children: PropTypes.node,
}
