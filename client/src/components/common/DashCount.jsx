import { twMerge } from 'tailwind-merge'

const DashCount = ({ icon, total, title, className }) => {
    const Icon = icon

    return (
        <div className={twMerge('flex items-center justify-between gap-4 rounded p-4', className)}>
            <div className='flex flex-col gap-1'>
                <h3 className='text-2xl font-bold text-white'>{total || 0}</h3>
                <p className='text-lg tracking-wider text-white'>{title}</p>
            </div>
            <Icon className='text-white' fontSize={45} />
        </div>
    )
}

export default DashCount
