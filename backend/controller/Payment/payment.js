const stripe = require('../../helpers/stripe');
const { v4: uuidv4 } = require('uuid');

const paymentController = async (req, res) => {
  const { amount } = req.body;

  if (!amount || isNaN(amount)) {
    return res.status(400).json({
      success: false,
      message: "Invalid amount provided",
    });
  }

  console.log("Payment request received:", req.body);

  const idempotencyKey = uuidv4();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      description: 'Payment for products',
      metadata: { integration_check: 'accept_a_payment' },
    }, {
      idempotencyKey: idempotencyKey,
    });

    console.log("Payment Intent created:", paymentIntent);

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
