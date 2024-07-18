import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  count: 0,
  shippingDetails: {
    address: '',
    city: '',
    state: '',
    zip: '',
  },
  paymentDetails: {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (!item) {
        state.cartItems.push(action.payload);
      }
    },
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count -= 1;
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },


    updateShippingDetails: (state, action) => {
      state.shippingDetails = { ...state.shippingDetails, ...action.payload };
    },
    updatePaymentDetails: (state, action) => {
      state.paymentDetails = { ...state.paymentDetails, ...action.payload };
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.count = 0;
      state.shippingDetails = {
        address: '',
        city: '',
        state: '',
        zip: '',
      };
      state.paymentDetails = {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      };
    },


  }
});

export const { addItemToCart,increament,decreament, removeItemFromCart,
  updateShippingDetails,
  updatePaymentDetails,
  clearCart,} = cartSlice.actions;
export default cartSlice.reducer;
