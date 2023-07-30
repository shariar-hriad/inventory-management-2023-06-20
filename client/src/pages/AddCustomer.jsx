import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import CustomerForm from '../components/form/CustomerForm'

const AddCustomer = () => {
    return (
        <Wrapper>
            <Heading title='নতুন কাস্টমার' subtitle='নতুন কাস্টমার যােগ করুন' />

            <div className='rounded-md border bg-white p-5'>
                <h3 className='mb-5 text-2xl font-bold'>নতুন কাস্টমার যােগ করুন</h3>

                {/* add customer form */}
                <CustomerForm />
            </div>
        </Wrapper>
    )
}

export default AddCustomer
