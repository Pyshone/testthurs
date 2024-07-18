import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increament, decreament, removeItemFromCart } from '../../../redux/reducer/cartSlice';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    Typography, Button, IconButton, Box, Divider, Grid
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Carthome = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const [quantities, setQuantities] = useState(cartItems.map(item => item.quantity || 1));
    const [totalAmount, setTotalAmount] = useState(0);
    const [delivery, setDelivery] = useState(660)
    const [tax, setTax] = useState(1021)
    const [quantity, setQuantity] = useState(1);





    useEffect(() => {
        const total = cartItems.reduce((acc, item, index) => acc + (item.Amount * quantities[index]), 0);
        setTotalAmount(total);
    }, [cartItems, quantities]);

    const handleRemove = (id) => {
        dispatch(removeItemFromCart({ id }));
    };

    const handleIncrement = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
        dispatch(increament(cartItems[index].id));
    };

    const handleDecrement = (index) => {
        if (quantities[index] > 1) {
            const newQuantities = [...quantities];
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
            dispatch(decreament(cartItems[index].id));
        }
    };


    // const totalAmount = quantities * quantity;
    // const tax = totalAmount * taxRate;
    const finalPrice = totalAmount + tax + delivery;


    return (
        <Fragment>
            <Box p={2}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Cart List
                </Typography>
                {cartItems.length > 0 ? (
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <TableContainer component={Paper}>
                                <Table aria-label="cart table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Image</TableCell>
                                            <TableCell>Title</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="center">Quantity</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cartItems.map((item, index) => (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                                                </TableCell>
                                                <TableCell>{item.title}</TableCell>
                                                <TableCell align="right">${item.Amount}</TableCell>
                                                <TableCell align="center">
                                                    <Button
                                                        variant="contained"
                                                        color="success"
                                                        onClick={() => handleIncrement(index)}
                                                    >
                                                        +
                                                    </Button>
                                                    <Typography variant="body1" component="span" mx={2}>
                                                        {quantities[index]}
                                                    </Typography>
                                                    <Button
                                                        variant="contained"
                                                        color="success"
                                                        onClick={() => handleDecrement(index)}
                                                    >
                                                        -
                                                    </Button>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <IconButton color="secondary" onClick={() => handleRemove(item.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} style={{ padding: '20px' }}>
                                <Typography variant="h5" component="h2">
                                    Order Summary
                                </Typography>
                                <Divider style={{ margin: '10px 0' }} />
                                <TableContainer component={Paper} sx={{ maxWidth: 400, marginTop: 2 }}>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Subtotal</TableCell>
                                                <TableCell align="right">₹{totalAmount.toFixed(2)}</TableCell>
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
                                                <TableCell>Total</TableCell>
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
                            </Paper>
                        </Grid>
                    </Grid>
                ) : (
                    <Typography variant="body1" color="text.secondary">
                        No items in the cart.
                    </Typography>
                )}
            </Box>
        </Fragment>
    );
}

export default Carthome;
