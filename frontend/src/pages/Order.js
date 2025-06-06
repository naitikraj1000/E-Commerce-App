import React, { useState, useEffect } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import displayINRCurrency from '../helpers/displayCurrency';
import moment from 'moment';

const Order = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    console.log("Fetching orders...", SummaryApi.orderList);
    try {
      const response = await fetch(SummaryApi.orderList.url, {
        method: SummaryApi.orderList.method,
        credentials: 'include',
      });

      const data = await response.json();

      if (data.success) {
        setOrders(data.data);
      } else {
        toast.error(data.message || "Failed to fetch orders");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4 pt-20">
      <h2 className="text-2xl font-bold mb-6">Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">You haven’t placed any orders yet.</p>
      ) : (
        orders.map((order, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg shadow-sm p-4 mb-6 bg-white"
          >
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="font-semibold">Order ID: {order._id}</h3>
                <p className="text-sm text-gray-500">
                  Placed on: {moment(order.createdAt).format('MMMM D, YYYY')}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium text-green-600 capitalize">
                  {order.paymentStatus}
                </p>
                <p className="text-sm text-gray-500">Total: {displayINRCurrency(order.totalAmount)}</p>
              </div>
            </div>

            <div className="space-y-3">
              {order.products.map((product, i) => {
                const prod = product.productId; // populated product object
                const imageUrl = prod?.productImage && prod.productImage.length > 0
                  ? prod.productImage[0]
                  : '/placeholder.png'; // fallback image path

                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-gray-50 p-3 rounded-md"
                  >
                    {/* Product Image */}
                    <img
                      src={imageUrl}
                      alt={prod?.productName || 'Product'}
                      className="w-16 h-16 object-cover rounded"
                    />

                    <div className="flex-1">
                      {/* Product Name */}
                      <p className="font-medium">{prod?.productName || 'Unknown Product'}</p>
                      <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                    </div>

                    <div className="text-sm font-semibold text-right">
                      {displayINRCurrency(product.price)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Order;
