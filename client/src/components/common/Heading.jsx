import PropTypes from 'prop-types'

const Heading = ({ title, subtitle }) => {
    return (
        <div className='mb-5'>
            <h2 className='text-[40px] font-bold text-[#212b36]'>{title}</h2>
            <p className='text-[20px] text-[#555555]'>{subtitle}</p>
        </div>
    )
}

export default Heading

Heading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}
