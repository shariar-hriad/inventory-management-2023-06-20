import PropTypes from 'prop-types'

const FlexBetween = ({ children }) => {
    return <div className='flex items-center justify-between'>{children}</div>
}

export default FlexBetween

FlexBetween.propTypes = {
    children: PropTypes.node,
}
