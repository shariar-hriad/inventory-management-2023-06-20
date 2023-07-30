import { Box, Button, ButtonGroup } from '@mui/material'
import Heading from '../components/common/Heading'
import Wrapper from '../components/common/Wrapper'
import CartTable from '../components/dataTable/CartTable'

const Cart = () => {
    return (
        <Wrapper>
            <Heading title='Your Cart' subtitle='Manage Your Cart here...' />

            <div className='mt-5'>
                <CartTable />
            </div>

            <Box mt={2} className='flex justify-end'>
                <ButtonGroup>
                    <Button size='large' variant='contained'>
                        Procced to Checkout
                    </Button>
                    <Button size='large' variant='outlined'>
                        Clear
                    </Button>
                </ButtonGroup>
            </Box>
        </Wrapper>
    )
}

export default Cart
