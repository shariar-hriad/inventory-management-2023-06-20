import { Field, Form } from 'formik'
import { twMerge } from 'tailwind-merge'
import Button from '../common/Button'
import CustomError from '../common/CustomError'

const Search = ({ name, className, ...rest }) => {
    return (
        <Form>
            <div className='flex gap-2'>
                <Field
                    className={twMerge(
                        'h-[60px] rounded-md border border-primary px-3 text-[20px] outline-primary',
                        className
                    )}
                    {...rest}
                />
                <Button className='tracking-wider' type='submit' title='খুজুন' />
            </div>
            <CustomError name={name} />
        </Form>
    )
}

export default Search
