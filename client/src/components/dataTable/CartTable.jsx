import { Button, Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'

const CartTable = () => {
    const [quantity, setQuantity] = useState(1)

    const incrementQuantity = () => {
        setQuantity((previousQuantity) => previousQuantity + 1)
    }

    const decrementQuantity = () => {
        setQuantity((previousQuantity) => previousQuantity - 1)
    }

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{
                    minWidth: 650,
                    '& .MuiTableRow-head': {
                        background: '#f9fafb',
                    },
                    '& .MuiTableCell-head': {
                        fontSize: '18px',
                        letterSpacing: '1px',
                    },
                    '& .MuiTableCell-body': {
                        fontSize: '18px',
                    },
                }}
                aria-label='cart table'
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align='right'>Product Price</TableCell>
                        <TableCell align='right'>Product Quantity</TableCell>
                        <TableCell align='right'>Total Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component='th' scope='row'>
                            Iphone 14pro max
                        </TableCell>
                        <TableCell align='right'>1,40,000</TableCell>
                        <TableCell align='right'>
                            <Stack direction='row' justifyContent='flex-end' spacing={1}>
                                <Button variant='outlined' onClick={incrementQuantity}>
                                    +
                                </Button>
                                <span className='rounded border px-4 py-2'>{quantity}</span>
                                <Button variant='outlined' onClick={decrementQuantity}>
                                    -
                                </Button>
                            </Stack>
                        </TableCell>
                        <TableCell align='right'>{140000 * quantity}</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component='th' scope='row'>
                            Iphone 14pro max
                        </TableCell>
                        <TableCell align='right'>1,40,000</TableCell>
                        <TableCell align='right'>
                            <Stack direction='row' justifyContent='flex-end' spacing={1}>
                                <Button variant='outlined' onClick={incrementQuantity}>
                                    +
                                </Button>
                                <span className='rounded border px-4 py-2'>{quantity}</span>
                                <Button variant='outlined' onClick={decrementQuantity}>
                                    -
                                </Button>
                            </Stack>
                        </TableCell>
                        <TableCell align='right'>{140000 * quantity}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align='right'>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align='right'>20</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CartTable
