import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { shoplist } from '../../../helpers/map';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { increament, decreament, removeItemFromCart } from '../../../redux/reducer/cartSlice';
import { Container } from '@mui/material';
const Cartlist = () => {
    const count = useSelector((state) => state.cart.count);
    const cartItems = useSelector(state => state.cart.cartItems);
    const { id } = useParams();
    const item = shoplist.find(item => item.id === parseInt(id));
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState(item.Amount)
    const [tax, setTax] = useState(21)
    const [delivery, setDelivery] = useState(660)
    // const [taxRate] = useState(0.11)
     const [quantities, setQuantities] = useState(cartItems.map(item => item.quantity || 1));



    const handleIncrement = () => {
        setQuantity(quantity + 1);
        dispatch(increament());
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            dispatch(decreament());
        }
    };


    const handleRemove = (id) => {
        dispatch(removeItemFromCart({ id }));
      };

    const totalPrice = amount * quantity;
    // const tax = totalPrice * taxRate;
    const finalPrice = totalPrice + tax + delivery;


    return (
        <Fragment>
            <Container>
            <h1>My Cart</h1>
            <p>Your Shopping Cart has ({cartItems.length} item ) added</p>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Product Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Total Price</TableCell>
                            <TableCell>Total Summary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <img src={item.image} alt={item.title} style={{ width: '150px', height: '150px' }} />
                                <h2>{item.title}</h2>
                            </TableCell>
                            <TableCell style={{ color: "rgb(30, 106, 177)" }}>
                                <h1>₹{item.Amount}.00</h1></TableCell>
                            <TableCell>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Button variant="contained" color="success" onClick={handleIncrement}>+</Button>
                                    <h1 style={{ margin: '0 10px' }}>{quantity}</h1>
                                    <Button variant="contained" color="success" onClick={handleDecrement}>-</Button>
                               
                                </div>
                            </TableCell>
                            <TableCell>
                                <p> ₹{totalPrice}.00</p>
                            </TableCell>
                            <TableCell>
                                <div style={{ marginTop: '20px' }}>
                                    <Typography variant="h6">Order Summary</Typography>
                                    <TableContainer component={Paper} sx={{ maxWidth: 400, marginTop: 2 }}>
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>Total</TableCell>
                                                    <TableCell align="right">₹{totalPrice}.00</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Taxes</TableCell>
                                                    <TableCell align="right">₹{tax}.00</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Delivery Charge</TableCell>
                                                    <TableCell align="right">₹{delivery}.00</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>SubTotal</TableCell>
                                                    <TableCell align="right">₹{finalPrice}.00</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <Button variant="contained" color="primary" component={Link} to="/checkout" style={{ marginTop: '20px' }}>
                                                        Proceed to Checkout
                                                    </Button>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Button variant="contained" color="warning" component={Link} to="/shop" style={{ marginTop: '20px' }}>
                                        Continue Shopping
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>

        </Fragment>
    );
};

export default Cartlist;
