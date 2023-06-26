import PropTypes from 'prop-types'

const Heading = ({ title, subtitle }) => {
    return (
        <div className='mb-5'>
            <h2 className='text-lg font-bold text-[#212b36]'>{title}</h2>
            <p className='text-sm text-[#555555]'>{subtitle}</p>
        </div>
    )
}

export default Heading

Heading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}
