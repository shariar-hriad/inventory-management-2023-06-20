import PropTypes from 'prop-types'

const DashWidget = ({ img, price, description }) => {
    return (
        <div className='flex items-center gap-4 rounded border p-4'>
            <div className='flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full bg-emerald-500'>
                <img src={img} alt='' />
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-bold'>${price}</h3>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    )
}

export default DashWidget

DashWidget.propTypes = {
    img: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
}
