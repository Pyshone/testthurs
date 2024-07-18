import React, { useState ,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Typography, Container, Grid, Paper } from '@mui/material';
import { updateShippingDetails, updatePaymentDetails } from '../../redux/reducer/cartSlice';
import { useLocation } from 'react-router-dom';
import { TableContainer, Table, TableBody, TableRow, TableCell, Divider } from '@mui/material';

const CheckoutPage = () => {
    const location = useLocation();
    const cartItems = useSelector(state => state.cart.cartItems);
    // const { cartItems, quantities, totalAmount, tax, delivery } = location.state || { cartItems: [], quantities: [], totalAmount: 0, tax: 0, delivery: 0 };
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState(cartItems.map(item => item.quantity || 1));
    const [totalAmount, setTotalAmount] = useState(0);
    const [delivery, setDelivery] = useState(660)
    const [tax, setTax] = useState(1021)
    // const [quantity, setQuantity] = useState(1);

    useEffect(() => {
      const total = cartItems.reduce((acc, item, index) => acc + (item.Amount * quantities[index]), 0);
      setTotalAmount(total);
  }, [cartItems, quantities]);


    const [shippingDetails, setShippingDetails] = useState({
        address: '',
        Name: '',
        Email: '',
        PhoneNumber: '',
    });

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleShippingChange = (e) => {
        setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
    };

    const handlePaymentChange = (e) => {
        setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        dispatch(updateShippingDetails(shippingDetails));
        dispatch(updatePaymentDetails(paymentDetails));
    };


    useEffect(() => {
      const total = cartItems.reduce((acc, item, index) => acc + (item.Amount * quantities[index]), 0);
      setTotalAmount(total);
  }, [cartItems, quantities]);


  const calculatedTotalAmount = cartItems.reduce((acc, item, index) => acc + (item.Amount * quantities[index]), 0);
    const finalPrice = calculatedTotalAmount + tax + delivery;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Checkout
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: '16px' }}>
                        <Typography variant="h6" gutterBottom>
                            Shipping Details
                        </Typography>
                        <TextField
                            label="Address"
                            name="address"
                            value={shippingDetails.address}
                            onChange={handleShippingChange}
                            fullWidth
                            margin="normal"
                        />
                        <Typography variant="h6" gutterBottom>
                            Customer Details
                        </Typography>
                        <TextField
                            label="Name"
                            name="Name"
                            value={shippingDetails.Name}
                            onChange={handleShippingChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            name="Email"
                            value={shippingDetails.Email}
                            onChange={handleShippingChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="PhoneNumber"
                            name="PhoneNumber"
                            value={shippingDetails.PhoneNumber}
                            onChange={handleShippingChange}
                            fullWidth
                            margin="normal"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: '16px' }}>
                        <Typography variant="h6" gutterBottom>
                            Order Summary
                        </Typography>
                        <Divider style={{ margin: '10px 0' }} />
                        <TableContainer component={Paper} sx={{ maxWidth: 400, marginTop: 2 }}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Subtotal</TableCell>
                                        <TableCell align="right">₹{calculatedTotalAmount.toFixed(2)}</TableCell>
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
                                                <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                                                Place Order
                                                </Button>
                                            </TableRow>
                 
                                    {cartItems.map((item, index) => (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.title}</TableCell>
                                            <TableCell align="right">{item.Amount} x {quantities[index]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{ padding: '16px' }}>
                        <Typography variant="h6" gutterBottom>
                            Payment Details
                        </Typography>
                        <TextField
                            label="Card Number"
                            name="cardNumber"
                            value={paymentDetails.cardNumber}
                            onChange={handlePaymentChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Expiry Date"
                            name="expiryDate"
                            value={paymentDetails.expiryDate}
                            onChange={handlePaymentChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="CVV"
                            name="cvv"
                            value={paymentDetails.cvv}
                            onChange={handlePaymentChange}
                            fullWidth
                            margin="normal"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            style={{ marginTop: '20px' }}
                        >
                            Place Order
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CheckoutPage;
