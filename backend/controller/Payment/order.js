const addToCartModel = require("../../models/cartProduct");
const orderModel = require("../../models/order");

async function orderprocessing(userId, products, amount, paymentIntentId) {
  try {
    // Prepare products array for order schema
    const orderProducts = products.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
    }));

    // Create the order
    await orderModel.create({
      userId,
      products: orderProducts,
      totalAmount: amount / 100, // Convert paise to INR
      paymentStatus: "paid",
      paymentIntentId, // Store Stripe paymentIntent.id
    });

    // Delete cart items
    await addToCartModel.deleteMany({ userId });

    console.log("✅ Order created and cart cleared for user:", userId);
  } catch (err) {
    console.error("❌ Error processing order:", err);
    throw new Error("Order processing failed");
  }
}

module.exports = orderprocessing;
