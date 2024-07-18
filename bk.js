const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourUsername', // Replace with your MySQL username
  password: 'yourPassword', // Replace with your MySQL password
  database: 'yourDatabase' // Replace with your MySQL database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Endpoint to handle checkout data
app.post('/api/checkout', (req, res) => {
  const { shippingDetails, paymentDetails, cartItems } = req.body;

  // Example query to save shipping details
  const shippingQuery = 'INSERT INTO shipping_details (address, name, email, phone_number) VALUES (?, ?, ?, ?)';
  db.query(shippingQuery, [shippingDetails.address, shippingDetails.Name, shippingDetails.Email, shippingDetails.PhoneNumber], (err, shippingResults) => {
    if (err) {
      console.error('Error saving shipping details:', err);
      return res.status(500).json({ error: 'Failed to save shipping details' });
    }

    // Example query to save payment details
    const paymentQuery = 'INSERT INTO payment_details (card_number, expiry_date, cvv) VALUES (?, ?, ?)';
    db.query(paymentQuery, [paymentDetails.cardNumber, paymentDetails.expiryDate, paymentDetails.cvv], (err, paymentResults) => {
      if (err) {
        console.error('Error saving payment details:', err);
        return res.status(500).json({ error: 'Failed to save payment details' });
      }

      // Example query to save cart items
      const cartItemsQuery = 'INSERT INTO cart_items (product_id, quantity) VALUES ?';
      const cartItemsData = cartItems.map(item => [item.id, item.quantity]);
      db.query(cartItemsQuery, [cartItemsData], (err, cartItemsResults) => {
        if (err) {
          console.error('Error saving cart items:', err);
          return res.status(500).json({ error: 'Failed to save cart items' });
        }

        res.status(200).json({ message: 'Checkout data saved successfully' });
      });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
