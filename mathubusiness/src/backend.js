// In your Node.js backend server file (e.g., server.js)
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5000; // Choose a port for your backend server

app.use(bodyParser.json());

// Define a route for sending emails
app.post('/api/sendEmail', (req, res) => {
  const { cartItems, userEmail } = req.body;

  // Logic for sending email using Nodemailer
  // This is a simplified example
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: userEmail,
    subject: 'Your Order Details',
    text: `Thank you for your order! Here are your order details: ${JSON.stringify(cartItems)}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
