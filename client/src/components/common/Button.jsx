import { twMerge } from 'tailwind-merge'

const Button = ({ title, type, className, ...rest }) => {
    return (
        <button
            className={twMerge(
                'rounded-md border-transparent bg-[#FE9F43] px-8 py-4 text-xl uppercase tracking-wider text-white transition-all hover:bg-[#FE9F43]/90 hover:shadow-md',
                className
            )}
            type={type || 'button'}
            {...rest}
        >
            {title || 'Button Title'}
        </button>
    )
}

export default Button
