import PropTypes from 'prop-types'

const DashCount = ({ icon, total, title, className }) => {
    const Icon = icon

    return (
        <div className={`flex items-center justify-between gap-4 rounded p-4 ${className}`}>
            <div className='flex flex-col gap-1'>
                <h3 className='text-lg font-bold text-white'>{total || 0}</h3>
                <p className='text-white'>{title}</p>
            </div>
            <Icon className='text-white' fontSize={45} />
        </div>
    )
}

export default DashCount

DashCount.propTypes = {
    icon: PropTypes.any,
    total: PropTypes.number,
    title: PropTypes.string,
    className: PropTypes.string,
}
