import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import SummaryApi from '../common';

const CheckoutForm = ({ amount, products, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      setError('Stripe has not loaded yet. Please try again.');
      setProcessing(false);
      return;
    }

    try {
      const response = await fetch(SummaryApi.makePayment.url, {
        method: SummaryApi.makePayment.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, products }),
        credentials: 'include',
      });

      const data = await response.json();

      if (!data.clientSecret) {
        setError('Failed to create payment intent.');
        setProcessing(false);
        return;
      }

      const cardElement = elements.getElement(CardElement);

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: { card: cardElement },
      });

      if (stripeError) {
        setError(stripeError.message);
        setProcessing(false);
      } else if (paymentIntent.status === 'succeeded') {
        setError(null);
        setProcessing(false);
        onPaymentSuccess();
      }
    } catch (err) {
      setError('Payment failed: ' + err.message);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        style={{
          border: '1px solid #cbd5e0',
          borderRadius: '6px',
          padding: '10px 14px',
          backgroundColor: '#f7fafc',
          marginBottom: '10px',
        }}
      >
        <CardElement
          options={{
            style: {
              base: {
                color: '#303238',
                fontSize: '16px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                '::placeholder': { color: '#a0aec0' },
              },
              invalid: {
                color: '#e53e3e',
                iconColor: '#e53e3e',
              },
            },
            hidePostalCode: true,
          }}
        />
      </div>

      {error && <div className="text-red-600">{error}</div>}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="bg-blue-600 p-2 text-white w-full"
      >
        {processing ? 'Processing...' : `Pay ₹${(amount / 100).toFixed(2)}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
