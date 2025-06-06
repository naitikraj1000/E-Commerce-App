const stripe = require('../../helpers/stripe'); // Ensure this exports Stripe instance with secret key
const { v4: uuidv4 } = require('uuid');

const paymentController = async (req, res) => {
  try {
    const { amount, products } = req.body;

    // Validate amount
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid amount provided",
      });
    }

    // Optional: Validate product structure
    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid or empty products array",
      });
    }

    console.log("Payment request received:", req.body);

    const idempotencyKey = uuidv4(); // Helps avoid double charges

    // Create a PaymentIntent for INR (paise)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // already expected to be in paise (e.g., 50000 = ₹500.00)
      currency: 'inr',
      description: 'Payment for products',
      metadata: {
        integration_check: 'accept_a_payment',
        product_info: JSON.stringify(products),
      },
    }, {
      idempotencyKey,
    });

    console.log("Payment Intent created:", paymentIntent.id);

    res.status(200).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      message: "Payment intent created successfully",
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create payment intent",
      error: error.message,
    });
  }
};

module.exports = paymentController;
