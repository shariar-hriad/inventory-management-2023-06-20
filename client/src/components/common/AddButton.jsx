import { AiOutlinePlus } from 'react-icons/ai'
import { twMerge } from 'tailwind-merge'

const AddButton = ({ title = 'Add Button', className, ...rest }) => {
    return (
        <button
            className={twMerge(
                'flex items-center gap-4 rounded-md bg-[#FE9F43] px-5 py-2 text-base font-bold text-white',
                className
            )}
            type='button'
            {...rest}
        >
            <AiOutlinePlus />
            {title}
        </button>
    )
}

export default AddButton
