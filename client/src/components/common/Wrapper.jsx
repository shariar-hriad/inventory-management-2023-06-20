import PropTypes from 'prop-types'

const Wrapper = ({ children }) => {
    return (
        <div className='m-5 bg-white'>
            <div className='p-5'>{children}</div>
        </div>
    )
}

export default Wrapper

Wrapper.propTypes = {
    children: PropTypes.node,
}
