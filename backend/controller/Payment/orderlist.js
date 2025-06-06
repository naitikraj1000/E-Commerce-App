const productModel = require('../../models/productModel'); // This registers the "Product" model
const orderModel = require('../../models/order');

async function orderlist(req, res) {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const orders = await orderModel
      .find({ userId })
      .sort({ createdAt: -1 })
      .populate('products.productId');  // This will work only if 'Product' model registered

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: err.message,
    });
  }
}

module.exports = orderlist;
