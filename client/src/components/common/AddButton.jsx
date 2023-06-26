import PropTypes from 'prop-types'
import { AiOutlinePlus } from 'react-icons/ai'

const AddButton = ({ title = 'Add Button', ...rest }) => {
    return (
        <button
            className='flex items-center gap-4 rounded-md bg-[#FE9F43] px-5 py-2 text-base font-bold text-white'
            type='button'
            {...rest}
        >
            <AiOutlinePlus />
            {title}
        </button>
    )
}

export default AddButton

AddButton.propTypes = {
    title: PropTypes.string,
}
